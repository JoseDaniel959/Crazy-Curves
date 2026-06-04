import { io, Socket } from "socket.io-client";
import { ServerSocketEvents } from "./ServerSocketEvents";
import PlayerSession from "../playerSession/PlayerSession";
import { PlayerSessionDTO } from "../game/DTO/DTOTypes";
export const socket: Socket = io();

export let playersOnline: PlayerSessionDTO[] = [];


socket.on(ServerSocketEvents.getAllPlayers, (data) =>{
    console.log("nuevos usuarios")
    playersOnline = data;
    console.log(playersOnline)
})


socket.on(ServerSocketEvents.removePlayerFromMenu,(playerId) =>{
    console.log("eliminar del array el player con id ", playerId)
    console.log(playerId)
    playersOnline = playersOnline.filter((playerOnline) => playerOnline.playerId !== playerId)
    console.log(playersOnline)
})


