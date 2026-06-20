import { PlayerSessionDTO } from "../game/DTO/DTOTypes"
import PlayerSession from "./PlayerSession"

export const savePlayerId= (playerSession:PlayerSessionDTO) => {
    window.localStorage.setItem('playerId',playerSession.playerId)
}

export const getPlayerId = ():string =>{
    const playerId:string =  window.localStorage.getItem('playerId') || ''
    return playerId;
}

