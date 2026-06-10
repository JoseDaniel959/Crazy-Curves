import { io, Socket } from "socket.io-client";
import { ServerSocketEvents } from "./ServerSocketEvents";
import PlayerSession from "../playerSession/PlayerSession";
import { PlayerSessionDTO } from "../game/DTO/DTOTypes";
import { ClientSocketEvents } from "./ClientSocketEvents";
export const socket: Socket = io();


export type globalState = {
    id: string,
    x: number,
    y: number,
    angle: number,
}

export let playersOnline: PlayerSessionDTO[] = [];
export let globalState =new Map<string,globalState>();

socket.on(ServerSocketEvents.getAllPlayers, (data) => {
    playersOnline = data;
})


socket.on(ServerSocketEvents.removePlayerFromMenu, (playerId) => {
    console.log("eliminar del array el player con id ", playerId)
    console.log(playerId)
    playersOnline = playersOnline.filter((playerOnline) => playerOnline.playerId !== playerId)
    console.log(playersOnline)
})


socket.on(ServerSocketEvents.addPlayersToGlobalState,(data)=>{
    data.forEach((element:any) => {
        globalState.set(element.id,element)
        
    });
    console.log("soy la data",globalState)

})



