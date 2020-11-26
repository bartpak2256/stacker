input.onButtonPressed(Button.A, function () {
    Level += 1
})
input.onButtonPressed(Button.B, function () {
    Level = 0
    sprite0 = game.createSprite(0, 4)
    basic.pause(500)
    while (Level == 0) {
        sprite0.move(1)
        sprite0.ifOnEdgeBounce()
        basic.pause(500)
        sprite_x = sprite0.get(LedSpriteProperty.X)
    }
    sprite1 = game.createSprite(randint(0, 4), 3)
    basic.pause(400)
    while (Level == 1) {
        sprite1.move(1)
        sprite1.ifOnEdgeBounce()
        basic.pause(400)
    }
    sprite1 = game.createSprite(randint(0, 4), 2)
    basic.pause(300)
    while (Level == 2) {
        sprite1.move(1)
        sprite1.ifOnEdgeBounce()
        basic.pause(300)
    }
    sprite1 = game.createSprite(randint(0, 4), 1)
    basic.pause(200)
    while (Level == 3) {
        sprite1.move(1)
        sprite1.ifOnEdgeBounce()
        basic.pause(200)
    }
    sprite1 = game.createSprite(randint(0, 4), 0)
    basic.pause(100)
    while (Level == 4) {
        sprite1.move(1)
        sprite1.ifOnEdgeBounce()
        basic.pause(100)
    }
})
let sprite1: game.LedSprite = null
let sprite_x = 0
let sprite0: game.LedSprite = null
let Level = 0
basic.showString("B")
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    if (Level == 5) {
        basic.pause(1000)
        basic.showString("you win!")
        control.reset()
    }
})
