radio.setGroup(168)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showString("R")
        radio.sendString("R")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showString("G")
        radio.sendString("G")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showString("B")
        radio.sendString("B")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showString("Y")
        radio.sendString("Y")
    } else {
        if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 450 && pins.analogReadPin(AnalogPin.P1) < 550)) {
            basic.showString("^")
            radio.sendString("^")
        } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 450 && pins.analogReadPin(AnalogPin.P1) < 550)) {
            basic.showString("V")
            radio.sendString("V")
        } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 450 && pins.analogReadPin(AnalogPin.P2) < 550)) {
            basic.showString("<")
            radio.sendString("<")
        } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 450 && pins.analogReadPin(AnalogPin.P2) < 550)) {
            basic.showString(">")
            radio.sendString(">")
        } else {
            if (pins.analogReadPin(AnalogPin.P2) > 550 && pins.analogReadPin(AnalogPin.P1) < 450) {
                basic.showString("LF")
                radio.sendString("LF")
            } else if (pins.analogReadPin(AnalogPin.P2) > 550 && pins.analogReadPin(AnalogPin.P1) > 550) {
                basic.showString("RF")
                radio.sendString("RF")
            } else if (pins.analogReadPin(AnalogPin.P2) < 450 && pins.analogReadPin(AnalogPin.P1) < 450) {
                basic.showString("LB")
                radio.sendString("LB")
            } else if (pins.analogReadPin(AnalogPin.P2) < 450 && pins.analogReadPin(AnalogPin.P1) > 550) {
                basic.showString("RB")
                radio.sendString("RB")
            }
        }
    }
})
