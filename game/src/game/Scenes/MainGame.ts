import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"
import { registryKey } from "../Registry/RegistryKeys";
import { playersOnline, socket } from "../../Socket/socketFunctions";
import PlayerSession from "../../playerSession/PlayerSession";
import { PlayerSessionDTO } from "../DTO/DTOTypes";
import { getPlayerSession } from "../../playerSession/LocalStorageFunctions";
import { ClientSocketEvents } from "../../Socket/ClientSocketEvents";
import SpaceshipSpriteO from "../GameObjects/SpaceshipSpriteO";



export default class BootLoader extends Phaser.Scene {
    private jugador: SpaceshipSpriteO | undefined;
    private randomPositionX = Phaser.Math.Between(50, 950);
    private randomPositionY = Phaser.Math.Between(50, 950);

    // sent request[]
    constructor() {
        super('MainGame')


    }
    create() {
        this.add.image(400, 300, "Background").setToBack()
        const music = this.sound.add('music1').setVolume(0.3);
        socket.on("a", (data) => {
            console.log("entrooo",data.angle)
            this.jugador?.setX(data.x);
            this.jugador?.setY(data.y);
            this.jugador?.setRotation(data.angle);



        })
        //Getting spaceship texture and tail texture from data manager
        // const spaceshipTextureKey: string = this.registry.get(registryKey.playerSelectionData).spaceshipTexturekey;
        // const tailTextureKey: string = this.registry.get(registryKey.playerSelectionData).tailComponenteTextureKey


        playersOnline.forEach((playerSession: PlayerSessionDTO) => {

            if (playerSession.playerId === getPlayerSession()) {
                this.jugador = new SpaceshipSpriteO(this, this.randomPositionX, this.randomPositionY, "SpaceshipBlue", "tailBlue");
            }
            else {
                new SpaceshipSpriteO(this, this.randomPositionX, this.randomPositionY, "SpaceshipBlue", "tailBlue")

            }


        })
        music.play()

    }
    update(time: number, delta: number): void {

        if (this.jugador) {
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
}