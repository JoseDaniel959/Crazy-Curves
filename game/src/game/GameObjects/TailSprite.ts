export default class TailSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, tailTextureKey: string) {
        super(scene, x, y, tailTextureKey)

        //adding the sprite to the scene
        scene.add.existing(this)
        scene.physics.add.existing(this, true)
        
        this.setBodySize(10, 10)
        this.setDisplaySize(10, 10)

    }

}