import music1 from "../../assets/music/nastelbom-funk-437330.mp3"
import SpaceshipAsset from "../../assets/images/Spaceship_01_BLUE.png"
import Tail from "../../assets/images/New Piskel.png"
import Explosion from "../../assets/Animations/Effect_Explosion_1_517x517.png"

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.audio('music1', [music1]);
        this.load.image("Spaceship", SpaceshipAsset)
        this.load.image("Tail", Tail)
        this.load.spritesheet("Explosion", Explosion, { frameWidth: 517, frameHeight: 517 })

    }
    create() {

        const element = this.add.dom(200, 200, "button", 'background-color: lime; width: 220px; height: 100px; font: 48px Arial', "Start")
        element.setInteractive();

        element.once('pointerdown', () => {
            this.scene.start("MainGame")
        });

    }

}
