import { playerSelectionDTO, PlayerSessionDTO } from "../game/DTO/DTOTypes";

export default class PlayerState {
    private playerId: string = "";
    private playerName : string;
    private isPlayerReady: boolean = false;
    private playerSelectionDTO?: playerSelectionDTO;
    private playerSession?: PlayerSessionDTO;
    private isAlive?: boolean;
    private x?: number;
    private y?: number;
    private angle?: number;
    private isAddingTail?: boolean
    private tailTime?: number;


    constructor(playerName:string) {
        this.playerName = playerName;
    }

    public getPlayerId(): string {
        return this.playerId;
    }

    public setPlayerId(playerId: string): void {
        this.playerId = playerId;
    }

    public getPlayerSelectionDTO(): playerSelectionDTO | undefined {
        return this.playerSelectionDTO;
    }

    public setPlayerSelectionDTO(playerSelectionDTO: playerSelectionDTO): void {
        this.playerSelectionDTO = playerSelectionDTO;
    }

    public getPlayerName():string{
        return this.playerName
    }

    public setPlayerName(newPlayer:string):void{
        this.playerName = newPlayer;
    }

}