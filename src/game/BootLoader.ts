import Phaser from "phaser"
import SpaceshipSprite from "./GameObjects/Palas"
import SpaceshipAsset from "../assets/Spaceship.png"

export default class BootLoader extends Phaser.Scene{
    private jugador: SpaceshipSprite | undefined;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined
    constructor(){
        super({key:'BootLoader'})
    }
    preload(){
        this.load.image("Spaceship",SpaceshipAsset)
    }
    create(){
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.jugador =  this.add.existing(new SpaceshipSprite(this,100,100,"Spaceship").setScale(0.1))
        this.jugador = this.physics.add.existing(this.jugador,false)
    }
    update(time: number, delta: number): void {
        if(this.jugador && this.jugador.body) this.physics.velocityFromAngle(this.jugador.angle , 150, this.jugador.body.velocity);

         
        if (this.cursors?.left.isUp ||this.cursors?.right.isUp )
        {
            this.jugador?.setAngularVelocity(0)
            console.log("velocidad angular 0")
        }
        if (this.cursors?.left.isDown)
        {
            this.jugador?.setAngularVelocity(100)
            console.log("ME PRESIONARON")
        }
          if (this.cursors?.right.isDown)
        {
            this.jugador?.setAngularVelocity(-100)
            console.log("ME PRESIONARON")
        }
    }
}