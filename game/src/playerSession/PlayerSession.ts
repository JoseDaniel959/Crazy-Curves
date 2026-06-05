import { playerSelectionDTO } from "../game/DTO/DTOTypes";

export default class PlayerSession {
    private playerId: string = "";
    private playerName : string;
    private playerSelectionDTO: playerSelectionDTO;

    constructor(playerName:string, playerSelectionDTO: playerSelectionDTO) {
        this.playerName = playerName;
        this.playerSelectionDTO = playerSelectionDTO;
    }

    public getPlayerId(): string {
        return this.playerId;
    }

    public setPlayerId(playerId: string): void {
        this.playerId = playerId;
    }

    public getPlayerSelectionDTO(): playerSelectionDTO {
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