import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"

export default class BootLoader extends Phaser.Scene {
    private jugador: SpaceshipSprite | undefined;
    constructor() {
        super('MainGame')

    }
    create() {
         this.jugador = new SpaceshipSprite(this, 100, 100)
        const music = this.sound.add('music1').setVolume(0.3);
        music.play()


    }
    update(time: number, delta: number): void {
        this.jugador?.move();


    }
}