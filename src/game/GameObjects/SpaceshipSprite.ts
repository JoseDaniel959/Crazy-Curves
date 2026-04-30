import ExplodeSprite from "./ExplodeSprite";
import TailSprite from "./TailSprite";

export default class SpaceshipSprite extends Phaser.Physics.Arcade.Sprite {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private offset = -20;
    private tail: TailSprite[] = [];
    private elapsedTime: number = 250; 
    private randomNumber: number = 20;
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
        this.setAngularVelocity(165)
    }

    moveRight(): void {
        this.setAngularVelocity(-165)
    }

    addLine(deltaTime:number): void {
        if(this.elapsedTime === 250){
            this.randomNumber =Phaser.Math.Between(0, 50);
           this.tail.push(new TailSprite(this.scene, this.x + Math.cos(this.rotation) * this.offset, this.y + Math.sin(this.rotation) * this.offset));
        }
        if(this.randomNumber === 1){
            this.updateTime(deltaTime)
        }
        console.log(this.randomNumber)
    }

    checkTailCollisions(): boolean {
        return this.scene.physics.collide(this, this.tail, () => true);
    }

    updateTime(deltaTime:number):void{
       if(this.elapsedTime > 0){
            this.elapsedTime -= deltaTime
            console.log(this.elapsedTime )

       }
       else{
         this.elapsedTime = 250;
       }
    }

    checkWordBoundsCollisions() {
        this.scene.physics.world.on('worldbounds', () => {
            this.explode(this.x, this.y)
            this.disableBody(true, true)
        });
    }

    move(deltaTime:number) {
        this.checkWordBoundsCollisions()
        if (!this.checkTailCollisions()) {
            this.addLine(deltaTime)
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