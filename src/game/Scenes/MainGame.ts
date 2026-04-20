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
        const animation =  this.anims.create({
            key:"Explosion",
            frames: this.anims.generateFrameNumbers('Explosion'),
             frameRate: 32
        })

         const sprite = this.add.sprite(50, 300, 'Explosion').setScale(0.1);

         sprite.play({ key: 'Explosion', repeat: 7 });
    }
    update(time: number, delta: number): void {
        this.jugador?.move();


    }
}