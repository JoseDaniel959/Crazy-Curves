import { getPlayerSession } from "../../playerSession/LocalStorageFunctions";
import { ClientSocketEvents } from "../../Socket/ClientSocketEvents";
import { socket } from "../../Socket/socketFunctions";
import ExplodeSprite from "./ExplodeSprite";
import JumpPower from "./Powers/JumpBoost";
import TailSprite from "./TailSprite";

export default class SpaceshipSpriteO extends Phaser.Physics.Arcade.Sprite {
    public playerId: string = getPlayerSession();
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private tailTextureKey: string;
    private offset = -20;
    private tail: TailSprite[] = [];
    private elapsedTime: number = 250;
    private randomNumber: number = 20;
    private isCheckCollisionsOn: boolean = true;
    private inputSequence = 0;
    constructor(scene: Phaser.Scene, x: number, y: number, spaceshipTextureKey: string, tailTextureKey: string) {
        super(scene, x, y, spaceshipTextureKey)
        this.tailTextureKey = tailTextureKey;
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

        this.setCollideWorldBounds(true, 0, 0, true);



        //setting the depth of the object. This is for the JumpPower
        this.setDepth(1)

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

    addLine(): void {
        console.log("entro y añado tail")
    this.tail.push(new TailSprite(this.scene, this.x + Math.cos(this.rotation) * this.offset, this.y + Math.sin(this.rotation) * this.offset, this.tailTextureKey));


        // if (this.elapsedTime === 250) {
        //     console.log("paso el elapsed")

        //     this.randomNumber = Phaser.Math.Between(0, 50);
        //     this.tail.push(new TailSprite(this.scene, this.x + Math.cos(this.rotation) * this.offset, this.y + Math.sin(this.rotation) * this.offset, this.tailTextureKey));
        // }
        // if (this.randomNumber === 1) {
        //     this.updateTime(deltaTime)
        // }
    }

    checkTailCollisions(isOn: boolean): void {
        if (isOn) {
            this.scene.physics.collide(this, this.tail, () => {
                this.explode(this.x, this.y)
                this.disableBody(true, true)

            });
        }

    }

    updateTime(deltaTime: number): void {
        if (this.elapsedTime > 0) {
            this.elapsedTime -= deltaTime
        }
        else {
            this.elapsedTime = 250;
        }
    }

    checkWordBoundsCollisions() {
        this.scene.physics.world.on('worldbounds', () => {
            this.explode(this.x, this.y)
            this.disableBody(true, true)
        });
    }

    setIsCheckCollisionsOn(value: boolean) {
        this.isCheckCollisionsOn = value;
    }

    move(deltaTime: number) {
        const input = {
            inputSequence: this.inputSequence,
            input: "",
        }
        if (this.cursors?.left.isUp && this.cursors?.right.isUp) {

            input.input = 'strait'
            // socket.emit(ClientSocketEvents.updatePlayerPosition,input)
        }
        if (this.cursors?.left.isDown) {

            input.input = 'left'

        }
        if (this.cursors?.right.isDown) {
            input.input = 'right'
        }
        if (this.cursors?.down.isDown) {
            input.input = 'down'

        }
        this.inputSequence++;

        return (input);

    }

    explode(x: number, y: number): ExplodeSprite {
        return new ExplodeSprite(this.scene, this.x, this.y)
    }


}