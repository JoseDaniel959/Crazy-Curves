import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"

export default class BootLoader extends Phaser.Scene{
    private jugador: SpaceshipSprite | undefined;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined
    constructor(){
        super('MainGame')
    }
    preload(){
    }
    create(){
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.jugador =  new SpaceshipSprite(this,100,100)
        const music = this.sound.add('music1').setVolume(0.3);
        music.play()    
    }
    update(time: number, delta: number): void {
        if(this.jugador && this.jugador.body) this.physics.velocityFromAngle(this.jugador.angle , 150, this.jugador.body.velocity);
         console.log(this.jugador?.x)
        if (this.cursors?.left.isUp ||this.cursors?.right.isUp )
        {
            this.jugador?.idle()
        }
        if (this.cursors?.left.isDown)
        {
            this.jugador?.moveRight()
        }
        if (this.cursors?.right.isDown)
        {
            this.jugador?.moveLeft()
        }
    }
}