import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"
import { registryKey } from "../Registry/RegistryKeys";



export default class BootLoader extends Phaser.Scene {
    private jugador: SpaceshipSprite | undefined;

    constructor() {
        super('MainGame')


    }
    create() {
        this.add.image(400,300,"Background").setToBack()
        const music = this.sound.add('music1').setVolume(0.3);
        
        //Getting spaceship texture and tail texture from data manager
        const spaceshipTextureKey : string  = this.registry.get(registryKey.playerSelectionData).spaceshipTexturekey;
        const tailTextureKey: string = this.registry.get(registryKey.playerSelectionData).tailComponenteTextureKey
        
        this.jugador = new SpaceshipSprite(this,200,200,spaceshipTextureKey,tailTextureKey);
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