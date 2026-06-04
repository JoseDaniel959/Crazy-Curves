import { PlayerSessionDTO } from "../game/DTO/DTOTypes"
import PlayerSession from "./PlayerSession"

export const savePlayerSesssion = (playerSession:PlayerSessionDTO) => {
    window.localStorage.setItem('playerId',playerSession.playerId)
}

export const getPlayerSession = ():string =>{
    const playerId:string =  window.localStorage.getItem('playerId') || ''
    return playerId;
}