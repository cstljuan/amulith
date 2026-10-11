---
name: arduino-usb-relic
description: "Integrate Arduino Uno USB serial button, rotary knob and PWM LED controls with a nonblocking service bridge, debounce and controller fallback."
---

# Arduino USB relic

Use for a USB-connected physical game controller. Read the project's firmware ownership, pin map and serial contract first. Reuse that contract; this document defines no packet shape. USB serial connects the board to the host; do not connect Uno 5 V signals to Jetson 3.3 V GPIO.

## Firmware decisions

- Verify the exact Uno variant, Grove connections, voltage and current limits against the hardware documentation. Treat example pins as project configuration, not universal defaults. A bare LED needs appropriate current limiting; verify polarity and ground.
- Use a debounced button state and send press edges once. Normalize/clamp knob readings with measured endpoints and modest smoothing/hysteresis. Rate-limit changes so ADC noise cannot saturate the serial link.
- Implement heartbeat/nearby/action LED modes with a nonblocking clock. Do not use long `delay` calls that stall button reads or serial reception. Prioritize temporary cues and then restore the requested steady mode.
- Expect host serial open to reset some Uno boards through DTR. Establish readiness before trusting readings and avoid reconnect loops that continually reset the board. Flashing is a separate task.

## Host bridge

Select the port by the observed USB identity or stable device path when available; a generic first `/dev/ttyACM*` match may select another board. Match baud rate and framing. Bound line length, buffers, read/write timeouts and accepted numeric ranges. Discard incomplete/corrupt frames and resynchronize; never execute received text.

Keep serial I/O off the service's event loop. Use a single owner for the port and a bounded queue. On disconnect, close cleanly, mark the relic unavailable and reconnect with backoff. Reset stale button edges and knob state on reconnect; do not replay queued presses from the prior connection.

The game must provide controller and keyboard equivalents for every physical action. A disconnected knob must leave a usable on-screen/controller control, and a lost LED must not block progress. Connection status should reflect the actual bridge, not merely the presence of a device path.

## Acceptance

Test recorded serial frames before hardware: corrupt/oversize lines, out-of-range ADC, repeated button state and disconnect. On the real board, test button bounce/hold, knob endpoints, LED mode transitions, reset-on-open and unplug/replug while playing. Record which checks were mocked and which used the actual hardware. Do not claim wiring or flashing was verified from a skill installation.

## References

- [Uno Rev3 hardware](https://docs.arduino.cc/hardware/uno-rev3/), confirm the actual board variant.
- [pySerial API](https://pyserial.readthedocs.io/en/latest/pyserial_api.html), including read/write timeouts and DTR behavior.
- [License and provenance](NOTICE.md). No sketch, bridge script or installer is bundled.
