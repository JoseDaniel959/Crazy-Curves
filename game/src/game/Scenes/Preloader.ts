import music1 from "../../assets/music/nastelbom-funk-437330.mp3"

//Animations
import Explosion from "../../assets/Animations/Effect_Explosion_1_517x517.png"

import { socket } from "../../Socket/socketFunctions"
import { ClientSocketEvents } from "../../Socket/ClientSocketEvents"
import PlayerSession from "../../playerSession/PlayerSession"
import ButtonComponent from "../UI/Menu/AtomicComponents/ButtonComponent"
import { savePlayerId } from "../../playerSession/LocalStorageFunctions"
import { ServerSocketEvents } from "../../Socket/ServerSocketEvents"
import { PlayerSessionDTO } from "../DTO/DTOTypes"
import {MID_SCREEN_WIDTH} from "../game"
import BaseUIMenuComponent from "../UI/Menu/CompoundComponents/BaseUIMenuComponent"
import preloadAssets from "../utils/PreloaderFunctions"


export default class Preloader extends Phaser.Scene {
    private playerName: string = "";
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.audio('music1', [music1]);
        this.load.spritesheet("Explosion", Explosion, { frameWidth: 517, frameHeight: 517 })
        preloadAssets(this);
    }   

    create() {
        new BaseUIMenuComponent(this)

        this.add.dom(MID_SCREEN_WIDTH, 300, 'input');
        
        new ButtonComponent(this, MID_SCREEN_WIDTH, 950, "StartButton", 0.5, () => {
            this.playerName = document.getElementsByTagName('input')[0].value

           socket.emit(ClientSocketEvents.addNewPlayer, new PlayerSession(this.playerName))
        })

        socket.on(ServerSocketEvents.playerCreated, (playerSessionDTO: PlayerSessionDTO) => {
            console.log(playerSessionDTO)
            if (playerSessionDTO.playerName === this.playerName) {
                savePlayerId(playerSessionDTO)
                this.scene.start("MainMenu")
            }

        })
        console.log(this.textures)

    }
}
