input.onButtonPressed(Button.A, function () {
    value += -1
    if (value < 0) {
        value = list2.length - 1
    }
    basic.showString("" + (list2[value]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(code)
})
input.onButtonPressed(Button.B, function () {
    value += 1
    if (value >= list2.length) {
        value = 0
    }
    basic.showString("" + (list2[value]))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    code = "" + code + list2[value]
    basic.pause(100)
    basic.showString("" + (list2[value]))
})
let code = ""
let value = 0
let list2: string[] = []
let keys = "0123456789DSOYR+-*/%=~<&|[]:;.@!H"
list2 = keys.split("")
value = list2.length
value = 0
code = ""
basic.showString("" + (list2[value]))
