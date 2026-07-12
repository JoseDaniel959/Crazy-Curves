import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"
import { registryKey } from "../Registry/RegistryKeys";
import { globalState, socket } from "../../Socket/socketFunctions";
import PlayerSession from "../../playerSession/PlayerState";
import { PlayerSessionDTO, playerStateDTO } from "../DTO/DTOTypes";
import { getPlayerId } from "../../playerSession/LocalStorageFunctions";
import { ClientSocketEvents } from "../../Socket/ClientSocketEvents";
import SpaceshipSpriteO from "../GameObjects/SpaceshipSpriteO";
import TailSprite from "../GameObjects/TailSprite";
import { ServerSocketEvents } from "../../Socket/ServerSocketEvents";



export default class BootLoader extends Phaser.Scene {
    private jugador: SpaceshipSpriteO | undefined;
    private playersSprite = new Map<string, SpaceshipSpriteO>();
    private allTails: TailSprite[] = [];
    private elapsedTime = 10;
    // sent request[]
    constructor() {
        super('MainGame')


    }
    create() {
        this.add.image(400, 300, "Background").setToBack()
        const music = this.sound.add('music1').setVolume(0.3);
        globalState.forEach((value, key) => {
            if (getPlayerId() === key) {
                this.jugador = new SpaceshipSpriteO(this, value.x, value.y, "SpaceshipBlue", "tailBlue")
                this.playersSprite.set(key, this.jugador)
            }
            else {
                this.playersSprite.set(key, new SpaceshipSpriteO(this, value.x, value.y, "SpaceshipBlue", "tailBlue"))
            }

        })

        socket.on(ServerSocketEvents.updatePlayerCoordinates, (data: playerStateDTO) => {
            let currentPlayer = this.playersSprite.get(data.playerId);
            if (currentPlayer) {
                currentPlayer.setX(data.x);
                currentPlayer.setY(data.y);
                currentPlayer.setRotation(data.angle);
                // currentPlayer.addLine();
                this.checkTailCollisions(currentPlayer)
                if (this.elapsedTime === 0 && data.isAddingTail) this.addLine(currentPlayer)
                
            }

        })



        music.play()

    }
    update(time: number, delta: number): void {
        if(this.elapsedTime > 0){
            this.elapsedTime -= 1
        }
        else{
            this.elapsedTime = 10
        }

        if (this.jugador?.getIsPlayerAlive()) {
            const input = this.jugador?.move(delta);
            socket.emit(ClientSocketEvents.sendInput, input)

        }

    }

    public setPlayer(newPlayer: SpaceshipSpriteO): void {
        this.jugador = newPlayer
    }

    public getPlayer(): SpaceshipSpriteO | undefined {
        return this.jugador;
    }

    checkTailCollisions(playerToChek: SpaceshipSpriteO): void {
        playerToChek.scene.physics.collide(playerToChek, this.allTails, () => {
            playerToChek.explode(playerToChek.x, playerToChek.y);
            playerToChek.disableBody(true, true);
            this.jugador?.setIsPlayerAlive(false);

        });
    }

    public addLine(currentPlayer: SpaceshipSpriteO) {
        this.allTails.push(currentPlayer.addLine())
    }
}