export default class ExplodeSprite extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number,) {
        super(scene, x, y, "Explosion")

        this.anims.create({
            key: "Explosion",
            frames: this.anims.generateFrameNumbers('Explosion'),
            frameRate: 32
        })
        this.play({ key: 'Explosion'});
        scene.add.existing(this).setScale(0.1)
    }
}
