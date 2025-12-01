---
title: Programming an STM32 "bare metal"
thumbnail: /img/posts/2025/08/stm32-closeup.jpg
---

## Premise
ST Microelectronics produces a popular line of microcontrollers known as
"STM32". STM32 are 32-bit microcontrollers based around ARM Cortex-M series
processor cores. To support software developers on the STM32 platform, ST
Microelectronics provides a series of software packages and libraries under the
name "STM32Cube" including the integrated development environment (IDE)
"STM32CubeIDE" and various hardware abstraction libraries (HALs). 

Providing software packages and libraries for developers is by no means an ST
Microelectronics specific feature. In fact, it seems that most microcontroller
manufacturers typically offer something similar to their purchasers.
Manufacturer provided libraries are a useful tool and can speed up development
provided they work as intended. There are few reasons to avoid them, especially
in a commercial setting where development time can (rightly or wrongly) be a
significant concern.

Despite the convenience of manufacturer provided libraries, it has been on my
list of projects to program a microcontroller without the convenience of a HAL
or IDE for some time. This is often known as "bare metal" programming, as there
is no intermediate library responsible for setting up memory or manipulating
device registers. Theoretically, what I learnt about microcontrollers at
university should be more than sufficient to undertake such a project. However,
there is almost always a significant division between theory and practice.

This blog post covers the necessary code to bootstrap an STM32F070RB into a
basic C program. The source code and development history for this project can be
found in the git repository[^0] up to the tag `minimal-c-project`. I plan to
cover some of the later developments present in the repository including the use
of Renode[^2] and microcontroller peripherals in a later post. In many respects,
this post is reminiscent of the notes I took whilst pursuing this project, 
rather than a coherent presentation of the subject for beginners. I defer to
the sources I drew upon for this experiment for a better presentation of the
basics.

### Acknowledgement
My primary point of reference for setting up a bare metal project is the
excellent series of blog posts by Vivonomicon on bare metal programming[^1].
Their blog posts go into more depth and breadth than I cover here.


## Table of Contents
 - 
   {:toc}


## Minimal C Program
The natural first step to a bare metal project is to understand what is
necessary to get the target computer to the start of the main function. The
target computer in this instance is the STM32F070RB chosen simply because I
happen to have a NUCLEO development board with that particular microcontroller
on hand.

### Start-up
We can use the target's documentation[^3] to get an idea of how the target
behaves on start-up. We'll assume, since it's quite typical, that the target has
some sort of program counter (PC) and that it's reset to a default value on
startup. We'll also assume that we have some way to place code into particular
sections of memory on startup. How exactly that's achieved, we'll get to in due
course.

Looking at the programming manual for the F0 series (PM0215), section 2.1
provides a "Programmer's Model" of F0 series STM32s that use the Cortex M0
processor. Starting with the programming manual is an arbitrary choice on my
part, but I found it to be more relevant as a starting point than the datasheet
(DS10697) for programming related work.

Section 2.1.3 of the programming manual describes the core registers in the
target. Notably, this section tells us that register 15 is the program counter
and is set to the value `0x00000004` on startup. This address is also known
as the "reset vector" and is a part of a larger section of memory known as the
"vector table".

The vector table (discussed in section 2.3.4 of the programmer's manual)
specifies the addresses that the processor should jump to when a certain event
(e.g. an interrupt, hardware fault, or reset) occurs. Hence, the value that
should be loaded into the reset vector is the address of the starting point of
the application code. Per section 2.2 of the programmer's manual the vector
table is located at the very start of the microcontroller's flash memory, in the
region corresponding to program code. Where exactly the program code is
physically located depends on the boot configuration of the microcontroller.
Since the board I'm using is configured to use internal flash memory, this will
be assumed throughout the rest of the article. 

### Program Layout
With a rough idea of the start-up routine established, it's necessary to
consider how instructions from the compiled program need to be laid out in
memory to fit the expectations of the target computer. I am using the Arm GNU
toolchain[^4] `arm-none-eabi-gcc` which expects a GNU linker script[^5] to
describe the memory layout of the target device.

The GNU linker (and similarly so for the LLVM linker[^6], one of the most common
alternatives) expects memory to be divided into regions and then sections.
Memory regions describe the size and position of areas of memory within the
system memory. In turn, regions are used to divide particular memory types on
the target system so that data may be appropriately allocated to memory. For
example, the most common two regions on a modern microcontroller would be the
division between flash memory (non-volatile memory) and RAM (volatile memory).
Naturally, anything that wishes to be kept between reboots of the target device
should be kept in the flash memory and it is the role of the linker file to
ensure that happens at link time.

Sections of memory are used to assign portions of regions of memory to specific
purposes. This is what enables the linker to assign pieces of data like
instructions to the flash and variables to particular places in RAM. Each
section specifies a name that it may be referred to by, the data that it
includes, and the region of memory that it belongs to.

For brevity's sake, I won't present specific code for the linker script here -
it's not terribly interesting to look at anyway. Instead the linker script that
I wrote is available[^7] for those who wish to read it. The key details to note
are that two memory regions are assigned for flash and RAM. To the flash, the
vector table, program text (instructions), and read only data (constants) are
assigned. To the RAM, the data (initialised variables), bss (uninitialised
variables), and dynamic allocation region are assigned. The sections assigned to
RAM take up no space in the final executable written to the flash memory on the
microcontroller. Instead, they are used to arrange the memory in the startup
phase of the microcontroller and to guarantee that the program does not use more
memory than is available. (Or otherwise warn the programmer that they need to
ease off on the memory usage.)

You may have noticed a discrepancy between the location of the vector table in
the linker script and its expected location according to the reset value of the
program counter. Section 2.5 of the reference manual (RM0360) clarifies why this
is the case. In essence, the STM32 always maps the flash memory to addresses
`0x08000000` onwards, and when configured to boot from the flash memory, these
addresses are aliased into memory from `0x00000000` onwards. This moves the
vector table into the position that the microcontroller expects it to be. In
fact, changing boot mode corresponds to changing what region of memory is mapped
into the `0x00000000-0x00007FFF` memory space in general.

### Vector Table
As previously mentioned, the vector table sits at the start of program memory
and is responsible for pointing the microcontroller to the start of a number of
specific routines. Critically, one of the important pointers that it provides is
the pointer to the start of the program. For our purposes it suffices to point
the remaining routines to a default handler that we can overwrite in the
application code as we please.

Because this also isn't very interesting code, it is available elsewhere[^8].

### Reset Handler
On startup it is necessary to manually initialise the portions of RAM that the
program is expecting per the linker file. This is handled by the reset handler
pointed to by the vector table. On completion the reset handler branches to the
traditional "main" function that marks the beginning of the traditional C
program.

The reset handler code is available elsewhere[^9] for those interested.

## Application Code
Only now is the microcontroller ready to run the application code. After the 
reset handler has run, the application code is invoked via the "main" function.
In the provided code I've set this up (in an echo of Vivonomicon's own choices)
to count upwards indefinitely. The code can be verified via a debugger such as
gdb. 

## Extensions and Next Steps
I've since extended this code to manipulate the GPIO of the STM32 F070RB. In
particular, the user LED built into the devlopment board I'm using. Since I am a
firm believer in simulation as a means of verification, I've also used 
Renode[^2] to simulate the board output. For the purposes of getting this post 
published, I've decided to defer that discussion to a later date. 

Some of the more recent developments I've worked on in the context of this
project includes pre-emptive scheduling (via ARM's Systick and PendSV 
interrupts). However, a good few months has already gone by since I wrote that
code. More writing on that may come if I find a suitable project to incorporate
it into.


## Footnotes

[^0]: J. L. Hay, "STM32 Bare Metal Git Repository",
    [https://github.com/JHay0112/stm32-bare-metal](https://github.com/JHay0112/stm32-bare-metal).

[^1]: Vivonomicon, "Bare Metal STM32 Programming (Part 1): Hello, ARM!",
    [https://vivonomicon.com/2018/04/02/bare-metal-stm32-programming-part-1-hello-arm/](https://vivonomicon.com/2018/04/02/bare-metal-stm32-programming-part-1-hello-arm/)

[^2]: Renode Simulation Framework, [https://renode.io/](https://renode.io/)

[^3]: ST Microelectronics, "STM32F070RB Product Page",
    [https://www.st.com/en/microcontrollers-microprocessors/stm32f070rb.html](https://www.st.com/en/microcontrollers-microprocessors/stm32f070rb.html)

[^4]: Arm, "Arm GNU Toolchain",
    [https://developer.arm.com/downloads/-/gnu-rm](https://developer.arm.com/downloads/-/gnu-rm)

[^5]: Free Software Foundation, "Using LD, the GNU linker",
    [https://ftp.gnu.org/old-gnu/Manuals/ld-2.9.1/](https://ftp.gnu.org/old-gnu/Manuals/ld-2.9.1/) 

[^6]: The LLVM Project, "LLD - The LLVM Linker",
    [https://lld.llvm.org/](https://lld.llvm.org/) 

[^7]: J. L. Hay, "STM32F070RB GNU Linker Script",
    [https://github.com/JHay0112/stm32-bare-metal/blob/minimal-c-project/core/stm32f070rb.ld](https://github.com/JHay0112/stm32-bare-metal/blob/minimal-c-project/core/stm32f070rb.ld)

[^8]: J. L. Hay, "STM32F070RB Vector Table",
    [https://github.com/JHay0112/stm32-bare-metal/blob/minimal-c-project/core/vector_table.S](https://github.com/JHay0112/stm32-bare-metal/blob/minimal-c-project/core/vector_table.S)

[^9]: J. L. Hay, "STM32F070RB Reset Handler",
    [https://github.com/JHay0112/stm32-bare-metal/blob/minimal-c-project/core/reset_handler.S](https://github.com/JHay0112/stm32-bare-metal/blob/minimal-c-project/core/reset_handler.S)
