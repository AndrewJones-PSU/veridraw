# VeriDraw
### v0.0.0-predev
VeriDraw is a web-based circuit designer for creating verilog designs by drawing diagrams.
Users can draw their circuit by dragging in basic function blocks (adders, multipliers, registers, etc.) and connecting them together.

This is currently a WIP, a lot of stuff might change.

## Roadmap
This is definitely subject to change, but the current roadmap to reach v1 is:
- get a working prototype with basic functionality (add/subtract, multiply, registers/memory)
    - this should also include the ability to view the generated verilog and export it
    - this should also allow saving/loading of diagram project files
- add ability to import verilog
    - this might be *difficult* and may get pushed down past v1
- add ability to use multiple modules, include modules inside of other modules

These features will be considered for after v1:
- add more streamlined download/upload 
- add SystemVerilog support
- add VHDL support