import { gameTitle, } from '../UI/Menu/MenuElements';
import PlayerSelectionComponent from '../UI/Menu/CompoundComponents/SelectionComponents/PlayerSelectionComponent';
import { socket } from '../../Socket/socketFunctions';
import { ServerSocketEvents } from '../../Socket/ServerSocketEvents';
import { ClientSocketEvents } from '../../Socket/ClientSocketEvents';
import ButtonComponent from '../UI/Menu/AtomicComponents/ButtonComponent';
export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }
    preload() {
    }
    create() {
        socket.emit(ClientSocketEvents.newPlayer)
        socket.on(ServerSocketEvents.getAllPlayers, (data: string[]) => {
            let offset = 0
            for (let id in data) {
                new PlayerSelectionComponent(this, 500, 200 + offset)
                offset += 150;
            }
        })
        new PlayerSelectionComponent(this, 500, 200)
        new ButtonComponent(this, 500, 950, "StartButton", 0.5, () => {
            this.scene.start("MainGame")
        })
    }

}
