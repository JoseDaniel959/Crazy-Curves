import { gameTitle, } from '../UI/Menu/MenuElements';
import PlayerSelectionComponent from '../UI/Menu/CompoundComponents/SelectionComponents/PlayerSelectionComponent';
import { playersOnline, socket } from '../../Socket/socketFunctions';
import { ServerSocketEvents } from '../../Socket/ServerSocketEvents';
import { ClientSocketEvents } from '../../Socket/ClientSocketEvents';
import ButtonComponent from '../UI/Menu/AtomicComponents/ButtonComponent';
import { registryKey } from '../Registry/RegistryKeys';
import PlayerSession from '../../playerSession/PlayerSession';
import { PlayerSessionDTO } from '../DTO/DTOTypes';
export default class MainMenu extends Phaser.Scene {

    constructor() {
        super('MainMenu');
    }

    create() {
        let playersSelectionComponent: PlayerSelectionComponent[] = [];

        socket.emit(ClientSocketEvents.getAllPlayers)

        socket.on(ServerSocketEvents.getAllPlayers, () => {
            let offset = 0

            playersOnline.forEach((playerOnline: PlayerSessionDTO) => {
                const { playerId, playerName } = playerOnline
                console.log("playerSelectionComponent")
                console.log(playersSelectionComponent)

                if (!this.isPlayerConnected(playersSelectionComponent, playerId)) {


                    playersSelectionComponent.push(
                        new PlayerSelectionComponent(this, 500, 350 + offset, playerName, playerId)
                    )
                }
                offset += 150;
            })

        })

        //removing player from the menu
        socket.on(ServerSocketEvents.removePlayerFromMenu, (playerId: string) => {
            console.log("desconecto a un usuario")
            this.disconectPlayer(playersSelectionComponent, playerId)
        })


        new ButtonComponent(this, 500, 950, "StartButton", 0.5, () => {
            console.log("me presionaron")
            socket.emit(ClientSocketEvents.initMatch, true)

            socket.on(ServerSocketEvents.startMatch, (startMatch) => {
                if (startMatch) {
                    this.scene.start('MainGame')
                }

            })

        })
    }

    isPlayerConnected(playersSelectionComponent: PlayerSelectionComponent[], playerIdToSeach: string): boolean {
        const playerSelectionFound = playersSelectionComponent.find((PlayerSelectionComponent) => {
            if (PlayerSelectionComponent.playerId === playerIdToSeach) {
                return playersSelectionComponent;
            }
        })
        return playerSelectionFound ? true : false;
    }

    disconectPlayer(playersSelectionComponent: PlayerSelectionComponent[], playerIdToDisconnect: string) {
        playersSelectionComponent.some((playerSelectionComponent) => {
            if (playerSelectionComponent.playerId == playerIdToDisconnect) {
                playerSelectionComponent.destroy();
            }
        })
    }

    // public getPlayersSelectionComponent(): PlayerSelectionComponent[] | undefined {
    //     return this.playersSelectionComponent;
    // }

    // public setPlayersSelectionComponent(
    //     playersSelectionComponent: PlayerSelectionComponent[]
    // ): void {
    //     this.playersSelectionComponent = playersSelectionComponent;
    // }

}
