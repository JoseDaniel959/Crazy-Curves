import ExplodeSprite from "./ExplodeSprite";
import TailSprite from "./TailSprite";

export default class SpaceshipSprite extends Phaser.Physics.Arcade.Sprite {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private offset = -20;
    private tail: TailSprite[] = [];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "Spaceship")

        //adding the sprite to the scene
        scene.add.existing(this)
        scene.physics.add.existing(this, false)

        //setting scenes input
        this.cursors = scene.input.keyboard?.createCursorKeys();

        //setting sprite's hitbox
        this.setScale(0.10)
        this.setCircle(70, 200, 180)
        this.setOrigin(0.5, 0.5)

        //setting a random angle         
        this.angle = Phaser.Math.Angle.RandomDegrees();

        this.setCollideWorldBounds(true, 0, 0, true);
    }

    idle(): void {
        this.setAngularVelocity(0);
    }

    moveLeft(): void {
        this.setAngularVelocity(100)
    }

    moveRight(): void {
        this.setAngularVelocity(-100)
    }

    addLine(): void {
        this.tail.push(new TailSprite(this.scene, this.x + Math.cos(this.rotation) * this.offset, this.y + Math.sin(this.rotation) * this.offset));
    }

    checkTailCollisions(): boolean {
        return this.scene.physics.collide(this, this.tail, () => true);
    }

    checkWordBoundsCollisions() {
        this.scene.physics.world.on('worldbounds', () => {
            this.explode(this.x, this.y)
            this.disableBody(true, true)
        });
    }

    move() {
        this.checkWordBoundsCollisions()
        if (!this.checkTailCollisions()) {
            this.addLine()
            this.scene.physics.velocityFromAngle(this.angle, 150, this.body?.velocity)

            if (this.cursors?.left.isUp || this.cursors?.right.isUp) {
                this.idle()
            }
            if (this.cursors?.left.isDown) {
                this.moveRight()
            }
            if (this.cursors?.right.isDown) {
                this.moveLeft()
            }
        }
        else {
            this.explode(this.x, this.y)
            this.disableBody(true, true)
        }

    }

    explode(x: number, y: number): ExplodeSprite {
        return new ExplodeSprite(this.scene, this.x, this.y)
    }


}