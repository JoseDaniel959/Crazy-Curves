import music1 from "../../assets/music/nastelbom-funk-437330.mp3"

//Spaceships sprites
import SpaceshipBlue from "../../assets/images/spaceships/Spaceship_01_BLUE.png"
import SpaceshipGreen from "../../assets/images/spaceships/Spaceship_02_GREEN.png"
import SpaceshipOrange from "../../assets/images/spaceships/Spaceship_04_ORANGE.png"
import SpaceshipPurple from "../../assets/images/spaceships/Spaceship_05_PURPLE.png"
import SpaceshipRed from "../../assets/images/spaceships/Spaceship_06_RED.png"

//Tail sprites
import tailBlue from "../../assets/images/tails/blue_tail.png"
import tailGreen from "../../assets/images/tails/green_tail.png"
import tailOrange from "../../assets/images/tails/orange_tail.png"
import tailPurple from "../../assets/images/tails/purple_tail.png"
import tailRed from "../../assets/images/tails/red_tail.png"


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
        
        //Loading spaceship sprites
        this.load.image("SpaceshipBlue", SpaceshipBlue)
        this.load.image("SpaceshipGreen", SpaceshipGreen)
        this.load.image("SpaceshipOrange", SpaceshipOrange)
        this.load.image("SpaceshipPurple", SpaceshipPurple)
        this.load.image("SpaceshipRed", SpaceshipRed)


        //loading tail sprites
        this.load.image("tailBlue", tailBlue)
        this.load.image("tailGreen", tailGreen)
        this.load.image("tailOrange", tailOrange)
        this.load.image("tailPurple", tailPurple)
        this.load.image("tailRed", tailRed)
        
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
