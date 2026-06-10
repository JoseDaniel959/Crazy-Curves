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

// Buttons
import BackwardButton from "../../assets/UI/Buttons/Backward_BTN.png"
import ForwardButton from "../../assets/UI/Buttons/Forward_BTN.png"
import StartButton from "../../assets/UI/Buttons/Start_BTN.png"
import { socket } from "../../Socket/socketFunctions"
import { ClientSocketEvents } from "../../Socket/ClientSocketEvents"
import PlayerSession from "../../playerSession/PlayerSession"
import ButtonComponent from "../UI/Menu/AtomicComponents/ButtonComponent"
import PlayerSelectionComponent from "../UI/Menu/CompoundComponents/SelectionComponents/PlayerSelectionComponent"
import { savePlayerSesssion } from "../../playerSession/LocalStorageFunctions"
import { ServerSocketEvents } from "../../Socket/ServerSocketEvents"
import { PlayerSessionDTO } from "../DTO/DTOTypes"


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
        this.load.image("Background", Background)

        //UI elements 
        this.load.image("Table", Table)
        // UI buttons
        this.load.image("BackwardButton", BackwardButton)
        this.load.image("ForwardButton", ForwardButton)
        this.load.image("StartButton", StartButton)

    }
    create() {

        const input = this.add.dom(500, 200, 'input');

        new ButtonComponent(this, 500, 950, "StartButton", 0.5, () => {
            const playerName = document.getElementsByTagName('input')[0].value
            const newPlayerSession = new PlayerSession(playerName, { spaceshipTexture: 'SpaceshipBlue', tailTexture: 'tailBlue' })
            socket.emit(ClientSocketEvents.addNewPlayer, new PlayerSession(playerName, { spaceshipTexture: 'SpaceshipBlue', tailTexture: 'tailBlue' }))
        })

        socket.on(ServerSocketEvents.playerCreated, (playerSessionDTO: PlayerSessionDTO) => {
            console.log(playerSessionDTO)
            if (playerSessionDTO) {
                savePlayerSesssion(playerSessionDTO)
                this.scene.start("MainMenu")
            }
        })


    }
}
