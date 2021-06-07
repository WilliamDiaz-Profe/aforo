input.onButtonPressed(Button.A, function () {
    Aforo += -1
})
input.onButtonPressed(Button.AB, function () {
    Aforo = 0
})
input.onButtonPressed(Button.B, function () {
    Aforo = Aforo + 1
})
let Aforo = 0
Aforo = 0
basic.forever(function () {
    basic.showNumber(Aforo)
})
