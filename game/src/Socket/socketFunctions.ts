import { io, Socket } from "socket.io-client";
import { ServerSocketEvents } from "./ServerSocketEvents";
import PlayerSession from "../playerSession/PlayerSession";
import { PlayerSessionDTO, playerStateDTO } from "../game/DTO/DTOTypes";
import { ClientSocketEvents } from "./ClientSocketEvents";
export const socket: Socket = io();

export let playersOnline: PlayerSessionDTO[] = [];
export let globalState =new Map<string,playerStateDTO>();

socket.on(ServerSocketEvents.getAllPlayers, (data) => {
    playersOnline = data;
})

socket.on(ServerSocketEvents.removePlayerFromMenu, (playerId) => {
    playersOnline = playersOnline.filter((playerOnline) => playerOnline.playerId !== playerId)
})


socket.on(ServerSocketEvents.addPlayersToGlobalState,(data)=>{
    data.forEach((element:any) => {
        globalState.set(element.id,element)
        
    });
})



