scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vy = 0
    }
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        if (jump < 2) {
            jump += 1
        }
    } else {
        if (jmup2 < 2) {
            jmup2 += 1
        }
    }
    mp.getPlayerSprite(player2).vy = -150
})
let jmup2 = 0
let jump = 0
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 300
jump = 0
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 300
jmup2 = 0
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
let camrera = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(camrera)
info.startCountdown(60)
game.onUpdate(function () {
    camrera.setPosition((mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x + mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x) / 2, (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y + mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y) / 2)
})
