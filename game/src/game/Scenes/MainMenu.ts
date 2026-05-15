import { gameTitle, playerBox, playerDiv, } from '../../components/Menu/MenuElements';
import { emitNewPlayerInMenu, socket } from '../socket/socketFunctions';
export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }
    preload() {
    }
    create() {
        emitNewPlayerInMenu();
        socket.on("getAllPlayersFromServer",(playersArray)=>{
            let offset = 0;
            for (const player in playersArray) {
                playerDiv(this,'HandsomeMCT',offset);
                offset = offset + 80;             

            }

        })
      

    }

}
