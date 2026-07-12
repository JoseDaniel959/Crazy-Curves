import { PlayerSessionDTO, playerStateDTO } from "../game/DTO/DTOTypes"
import PlayerSession from "./PlayerState"

export const savePlayerId= (playerStateDTO:playerStateDTO) => {
    window.localStorage.setItem('playerId',playerStateDTO.playerId)
}

export const getPlayerId = ():string =>{
    const playerId:string =  window.localStorage.getItem('playerId') || ''
    return playerId;
}

