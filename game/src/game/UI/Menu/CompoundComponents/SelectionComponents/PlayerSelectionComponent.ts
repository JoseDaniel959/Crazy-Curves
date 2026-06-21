import { ClientSocketEvents } from "../../../../../Socket/ClientSocketEvents";
import { socket } from "../../../../../Socket/socketFunctions";
import { playerSelectionDTO, PlayerSessionDTO } from "../../../../DTO/DTOTypes";
import { PhaserEvents } from "../../../../Events/PhaserEvents";
import TableComponent from "../../AtomicComponents/TableComponetn";
import UIComponent from "../../UIComponent";
import PowerSelectionComponent from "./PowerSelectionComponent";
import SpaceshipSelectionComponent from "./SpaceshipSelectionComponent";
import TailSelectionComponent from "./TailSelectionComponent";

export default class PlayerSelectionComponent extends UIComponent {
    public playerId : string;
    private tableComponent: TableComponent;
    private playerName: Phaser.GameObjects.Text;
    private spaceshipSelectionComponent: SpaceshipSelectionComponent;
    private upPowerSelectionComponent: PowerSelectionComponent;
    private downPowerSelectionComponent: PowerSelectionComponent;
    private tailSelectionComponent: TailSelectionComponent;


    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        playerName: string,
        playerId: string
    ) {
        super(scene, x, y, "backWardButton", 1)
        this.tableComponent = new TableComponent(scene, x, y, 1.5)
        this.listener()
        this.playerName = scene.add.text(x + 50, y - 15, playerName)
        this.spaceshipSelectionComponent = new SpaceshipSelectionComponent(scene, x - 170, y, 0.18, "Spaceship")
        this.upPowerSelectionComponent = new PowerSelectionComponent(scene, x - 50, y - 50, "BackwardButton", 0.15)
        this.downPowerSelectionComponent = new PowerSelectionComponent(scene, x - 50, y + 10, "BackwardButton", 0.15)
        this.tailSelectionComponent = new TailSelectionComponent(scene, x - 110, y - 20, 0.5, "tail")
        this.playerId = playerId;
    }

    public getSpaceshipSelectionComponent(): SpaceshipSelectionComponent {
        return this.spaceshipSelectionComponent;
    }

    public setSpaceshipSelectionComponent(
        spaceshipSelectionComponent: SpaceshipSelectionComponent
    ): void {
        this.spaceshipSelectionComponent = spaceshipSelectionComponent;
    }

    public getUpPowerSelectionComponent(): PowerSelectionComponent {
        return this.upPowerSelectionComponent;
    }

    public setUpPowerSelectionComponent(
        upPowerSelectionComponent: PowerSelectionComponent
    ): void {
        this.upPowerSelectionComponent = upPowerSelectionComponent;
    }

    public getDownPowerSelectionComponent(): PowerSelectionComponent {
        return this.downPowerSelectionComponent;
    }

    public setDownPowerSelectionComponent(
        downPowerSelectionComponent: PowerSelectionComponent
    ): void {
        this.downPowerSelectionComponent = downPowerSelectionComponent;
    }

    public getTailSelectionComponent(): TailSelectionComponent {
        return this.tailSelectionComponent;
    }

    public setTailSelectionComponent(
        tailSelectionComponent: TailSelectionComponent
    ): void {
        this.tailSelectionComponent = tailSelectionComponent;
    }

     public getTableSelectionComponent(): TableComponent {
        return this.tableComponent;
    }

    public setTableSelectionComponent(
        tableComponent: TableComponent
    ): void {
        this.tableComponent = tableComponent;
    }

    public toDTO():Partial<PlayerSessionDTO>{
        const playerSelectionDTO:playerSelectionDTO = {
            spaceshipTexture: this.spaceshipSelectionComponent.getAtomicComponent().getTexture(),
            tailTexture: this.tailSelectionComponent.getAtomicComponent().getTexture()
        }

        const newPlayerSession: Partial<PlayerSessionDTO> = {
            playerId: this.playerId,
            playerSelectionDTO
        }
        return newPlayerSession;
    }
    
    public listener(){
        this.scene.game.events.addListener(PhaserEvents.updateSelectionCompononent,
            ()=>{
                socket.emit(ClientSocketEvents.updatePlayerSelection,this.toDTO())
            } 
        )
    }

    public destroy(){
        this.playerName.destroy()
        this.tableComponent.getPhaserImage().destroy()
        this.spaceshipSelectionComponent.destroy()
        this.upPowerSelectionComponent.destroy()
        this.downPowerSelectionComponent.destroy()
        this.tailSelectionComponent.destroy()    
    }
}