import { gameTitle, playerBox, playerDiv, } from '../../components/Menu/MenuElements';
import styles from '../../components/Menu/styles.css'
import { emitNewPlayerInMenu, socket } from '../socket/socketFunctions';
export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }
    preload() {
    }
    create() {
        emitNewPlayerInMenu();
        socket.on("getPlayers", (players) => {
            console.log(players)
        })
        

    }

}
