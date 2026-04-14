---
title: Weller AG 700 Heißluftstation Repair
---

I recently bought a Weller AG 700 Heißluftstation ("hot air station") second
hand (Figure 1). This is a particularly old model of hot air reflow station. So
old in fact, that I haven't been able to find a definitive record of just how
old it is. The Weller tools discontinued products list[^1] does not include it,
and it is mentioned in forum posts[^2] [^3] from 2005 by a user named "Frank",
as well as an arcade site from 2003[^5].

<figure>
    <img src="/img/posts/2026/04/weller-ag700-control-panel.jpg" />
    <figcaption>Figure 1 - Weller AG 700 front view.</figcaption>
</figure>

"Frank" and I share a common experience with our second hand Weller AG 700
purchases, as have other Weller AG 700 users[^4]. While heating, the green LED
above the temperature control knob flickers irregularly and the "hot air" is
closer to "warm air". In my case, this rendered the hot air station practically
unusable unless set to the maximum temperature and air flow setting.

My cursory research into this issue led me to the advice from "gb"[^3] that this
type of issue can usually be traced to the TRIAC or temperature sensor. Tracing
back the wires from the heater in the hot air station's pen led me to the front
most PCB (Figure 2). On the parts diagram[^5], this PCB is marked as "Circuit
Board-Heating".

<figure>
    <img src="/img/posts/2026/04/weller-ag700-heating-pcb.jpg" />
    <figcaption>Figure 1 - Weller AG 700 heating PCB.</figcaption>
</figure>

There are two trimpots on this circuit, presumably set in place during a
calibration procedure as a part of manufacturing of the hot air station. Small
tweaks of either potentiometer change the behaviour of the heater which are
evidenced by changes of the temperature of the air exiting the heater and
the glow of the heater coil.

I manually adjusted the two trimpots until the behaviour of hot air station
matched my expectations. Since there is no documentation of this circuitry
available and I am wary of probing an unknown circuit, I did this by trial and
error with the hot air station de-engergised whilst I made adjustments. Only
small (~10 degree) movements of the trimpots were required to achieve desirable
behaviour, larger movements tended the device to driving the heater fully on or
fully off regardless of temperature.

Further research I completed after effecting the repair uncovered a blog post by
Thomas Reitboeck[^6] in which they repair another Weller AG 700 with a similar
guess-and-check repair. Since the complaints of "Frank"[^3] and "Marco69"[^4]
are similar to those of Thomas Reitboeck[^6] and I, it is possible that a
similar repair could have been applied to their devices. Presumably this issue
is caused by drift of the trimpot setting over time or other degredation of the
circuitry around them.

As a next step, I would like to reverse engineer the heating circuitry in the
Weller AG 700 to infer the purpose of the two trimpots. This should be
achievable due to the 2-layer design, but the unmarked part in the centre of
Figure 2 may prove troublesome. Considering the surrounding circuit, the
unmarked part could be an op-amp or otherwise involved in driving the TRIAC on
the right. Hopefully, the circuit context will tell.

## Footnotes

[^1]: Weller Tools, "Discontinued Products,"
    [https://www.weller-tools.com/eu/gb/discontinued-products](https://www.weller-tools.com/eu/gb/discontinued-products)

[^2]: Electronics-Lab, "Weller AG 700 hot air station questions," November 2005,
    [https://www.electronics-lab.com/forums/threads/weller-ag-700-hot-air-station-questions.61717/](https://www.electronics-lab.com/forums/threads/weller-ag-700-hot-air-station-questions.61717/)

[^3]: ElectronDepot, "Question about Weller AG700 soldering station," November 2005, 
    [https://www.electrondepot.com/repair/question-about-weller-ag700-soldering-station-58975-.htm](https://www.electrondepot.com/repair/question-about-weller-ag700-soldering-station-58975-.htm)

[^4]: Circuits Online, "Weller AG-700 too cold," October 2009,
    [https://www.circuitsonline.net/forum/view/78358](https://www.circuitsonline.net/forum/view/78358)
    (Dutch source)

[^5]: Arcade Electronics Inc., "WELLER AND UNGAR PARTS DIAGRAMS," 2003,
    [https://web.archive.org/web/20120323092335/http://www.arcade-electronics.com/cooper/weller_parts.htm](https://web.archive.org/web/20120323092335/http://www.arcade-electronics.com/cooper/weller_parts.htm)
    (Archived source)

[^6]: Thomas Reitboeck, "Weller AG 700 Heissluftstation repair," March 2020,
    [https://kthemall.at/?p=2459](https://kthemall.at/?p=2459) (German source)