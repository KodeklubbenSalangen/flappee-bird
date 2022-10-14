namespace SpriteKind {
    export const ground = SpriteKind.create()
    export const pipe = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pipe, function (sprite, otherSprite) {
    game.over(false)
})
let pipe: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`flap_pee_bird_flap`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`flappeebird`,
100,
true
)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(assets.image`bg`)
mySprite.ay = 300
game.onUpdateInterval(2500, function () {
    pipe = sprites.create(assets.image`myImage`, SpriteKind.pipe)
    pipe.vx += -50
    pipe.x = 175
    pipe.y = randint(80, 110)
    info.changeScoreBy(1)
})
game.onUpdateInterval(100000, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.pipe)
})
