import music1 from "../../assets/music/nastelbom-funk-437330.mp3"
import SpaceshipBlue from "../../assets/images/Spaceship_01_BLUE.png"
import SpaceshipOrange from "../../assets/images/Spaceship_04_ORANGE.png"
import Tail from "../../assets/images/New Piskel.png"
import Explosion from "../../assets/Animations/Effect_Explosion_1_517x517.png"
import Background from "../../assets/images/background/export202405130010328162.png"
import Table from "../../assets/UI/Table.png"
import BackwardButton from "../../assets/UI/Buttons/Backward_BTN.png"
import ForwardButton from "../../assets/UI/Buttons/Forward_BTN.png"


export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.audio('music1', [music1]); 
        this.load.image("SpaceshipBlue", SpaceshipBlue)
        this.load.image("SpaceshipOrange", SpaceshipOrange)

        this.load.image("Tail", Tail)
             //animations
        
        this.load.spritesheet("Explosion", Explosion, { frameWidth: 517, frameHeight: 517 })

        //background
        this.load.image("Background",Background)

        //UI elements 
        this.load.image("Table",Table)
        // UI buttons
        this.load.image("BackwardButton",BackwardButton)
        this.load.image("ForwardButton",ForwardButton)


    }
    create() {

        const element = this.add.dom(200, 200, "button", 'background-color: lime; width: 220px; height: 100px; font: 48px Arial', "Start")
        element.setInteractive();

        element.once('pointerdown', () => {
            this.scene.start("MainMenu")
        });

    }

}
