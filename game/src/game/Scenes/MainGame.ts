import Phaser from "phaser"
import SpaceshipSprite from "../GameObjects/SpaceshipSprite"
import { registryKey } from "../Registry/RegistryKeys";
import { globalState, playersOnline, socket } from "../../Socket/socketFunctions";
import PlayerSession from "../../playerSession/PlayerSession";
import { PlayerSessionDTO } from "../DTO/DTOTypes";
import { getPlayerSession } from "../../playerSession/LocalStorageFunctions";
import { ClientSocketEvents } from "../../Socket/ClientSocketEvents";
import SpaceshipSpriteO from "../GameObjects/SpaceshipSpriteO";



export default class BootLoader extends Phaser.Scene {
    private jugador: SpaceshipSpriteO | undefined;
    private playersSprite = new Map<string,SpaceshipSpriteO>();

    // sent request[]
    constructor() {
        super('MainGame')


    }
    create() {

        this.add.image(400, 300, "Background").setToBack()
        const music = this.sound.add('music1').setVolume(0.3);
        globalState.forEach((value,key) =>{ 
            if(getPlayerSession() === key){
                console.log("ENTREE A MI SESION")
                this.jugador = new SpaceshipSpriteO(this,value.x,value.y,"SpaceshipBlue","tailBlue")

            }
            this.playersSprite.set(key,new SpaceshipSpriteO(this,value.x,value.y,"SpaceshipBlue","tailBlue"))
            
        })
        
        socket.on("a", (data) => {
            console.log("entrooo",data)
            this.playersSprite.get(data.id)?.setX(data.x);
            this.playersSprite.get(data.id)?.setY(data.y);
            this.playersSprite.get(data.id)?.setRotation(data.angle);
            this.playersSprite.get(data.id)?.addLine();




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