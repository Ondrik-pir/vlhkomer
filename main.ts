let tlacidlo = 0
let Vlhkost = 0
input.onButtonPressed(Button.A, function () {
    tlacidlo = 1
})
input.onButtonPressed(Button.B, function () {
    tlacidlo = 0
})
basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        Vlhkost = pins.analogReadPin(AnalogPin.P1)
        if (Vlhkost <= 400) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # # # . #
                # . # . #
                . . . . #
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . # # # .
                . . # . .
                . . # # .
                . . # . .
                `)
        }
        basic.pause(2000)
        basic.clearScreen()
        if (tlacidlo == 1) {
            basic.showLeds(`
                . . # . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `)
        }
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("" + input.temperature() + "C")
    }
    if (Vlhkost <= 400 && tlacidlo == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # . #
            # . # . #
            . . . . #
            `)
        for (let index = 0; index < 2; index++) {
            music.setVolume(255)
            music.playMelody("B D C5 C B D C5 C ", 100)
        }
    }
})
