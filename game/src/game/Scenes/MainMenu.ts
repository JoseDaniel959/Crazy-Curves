import { gameTitle, playerTable, } from '../UI/Menu/MenuElements';
import { emitNewPlayerInMenu, socket } from '../socket/socketFunctions';
export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }
    preload() {
    }
    create() {
        emitNewPlayerInMenu();

        playerTable(this,"handsome",2);
        // this.scene.start("MainGame")


    }

}
