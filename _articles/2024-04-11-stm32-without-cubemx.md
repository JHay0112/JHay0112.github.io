---
title: Setting up an STM32 without CubeMX
---

STMicroelectronics (STM) provides a tool called CubeMX for setting up software for the STM32. CubeMX
is quite convenient, but I find that the file structure it defaults to isn't consistent with the way
that I like to develop. Even worse, it leads to lots of version controlled library code that would 
be better suited to be included as a Git submodule. In this article I consider developing for an
F4 series STM32 but this same approach should apply regardless of the specific STM32. This article
is far from thorough and some amount of debugging should always be expected.

A cursory look through STM's Github account shows two repositories that are immediately recognisable
from CubeMX's automated generated code. These are the CMSIS core and HAL libraries. The CMSIS core
library is the same for each STM32 series and provides a standard interface for software libraries.
The HAL library is series specific and provides a set of common functions for configuring and using
the major peripherals such as UART, I2C, SPI and so on. The HAL library requires a configuration 
file to be included in the source code and a template is provided called - in my case - 
`stm32f4xx_hal_conf_template.h` and located in `Inc/` of the HAL repository. 

A device specific CMSIS library is also required and may be included in the same manner as the HAL
and CMSIS core. In the `Source/Templates/` of the device CMSIS there are startup and system 
initialisation code (`startup_stm32fxxxxx.s` and `system_stm32f4xx.c` in my case). These both 
required copying into my source directory and included in the build process.

Finally, a linker script is required for building the binaries to be uploaded to the STM32. I found
a suitable linker script in the CubeF4 repository. It turns out that the CubeF4 repository is a
compilation of the CMSIS and HAL libraries as well as project examples and middleware for the F4
series STM32. To reduce the inclusion of unnecessary code, I have continued to include each library
seperately, but just included the CubeFX repository would also be a valid approach.

I've consolidated these steps below for ease of reference:

1. Include CMSIS core library. 
2. Include HAL library for the STM32 series being built for and make a configuration based on the
   included template.
3. Include the series specific CMSIS library and copy over the startup and system initilisation 
   code.
4. Include the linker script from the series CubeFX library.