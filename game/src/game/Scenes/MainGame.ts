import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"



export default class BootLoader extends Phaser.Scene {
    private jugador: SpaceshipSprite | undefined;
    constructor() {
        super('MainGame')

    }
    create() {
        this.add.image(400,300,"Background").setToBack()
        const music = this.sound.add('music1').setVolume(0.3);
        music.play()
        
    }
    update(time: number, delta: number): void {
        if(this.jugador){
            this.jugador?.move(delta);
        } 
    }

    public setPlayer(newPlayer: SpaceshipSprite):void{
        this.jugador = newPlayer
    } 

     public getPlayer():SpaceshipSprite | undefined{
        return this.jugador;
    } 
}