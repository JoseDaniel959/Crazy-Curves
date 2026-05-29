import { gameTitle, } from '../UI/Menu/MenuElements';
import PlayerSelectionComponent from '../UI/Menu/CompoundComponents/SelectionComponents/PlayerSelectionComponent';
import { socket } from '../../Socket/socketFunctions';
import { ServerSocketEvents } from '../../Socket/ServerSocketEvents';
import { ClientSocketEvents } from '../../Socket/ClientSocketEvents';
import ButtonComponent from '../UI/Menu/AtomicComponents/ButtonComponent';
import { registryKey } from '../Registry/RegistryKeys';
export default class MainMenu extends Phaser.Scene {
    private playerSelectionComponent: PlayerSelectionComponent | undefined;
    constructor() {
        super('MainMenu');
    }
    private starButtonCallBack() {
        this.registry.set(registryKey.playerSelectionData,
            {
                spaceshipTexturekey: this.playerSelectionComponent?.
                    getSpaceshipSelectionComponent()
                    .getTexture(),

                tailComponenteTextureKey: this.playerSelectionComponent?.
                    getTailSelectionComponent()
                    .getTexture(),

            })
        this.scene.start("MainGame")
    }
    create() {
        this.playerSelectionComponent = new PlayerSelectionComponent(this, 500, 200)
        socket.emit(ClientSocketEvents.newPlayer, this.playerSelectionComponent.toString())
        socket.on(ServerSocketEvents.getAllPlayers, (data: string[]) => {
            let offset = 0
            for (let id in data) {
                new PlayerSelectionComponent(this, 500, 350 + offset)
                offset += 150;
            }
        })

        new ButtonComponent(this, 500, 950, "StartButton", 0.5, this.starButtonCallBack)
    }

}
