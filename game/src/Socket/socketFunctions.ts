import { io, Socket } from "socket.io-client";
import { ServerSocketEvents } from "./ServerSocketEvents";
import PlayerSession from "../playerSession/PlayerState";
import { PlayerSessionDTO, playerStateDTO } from "../game/DTO/DTOTypes";
import { ClientSocketEvents } from "./ClientSocketEvents";
import PlayerState from "../playerSession/PlayerState";
export const socket: Socket = io();

export let globalState =new Map<string,playerStateDTO>();

socket.on(ServerSocketEvents.getAllPlayers, (playersOnline:playerStateDTO[]) => {
    playersOnline.forEach((PlayerStateDTO:playerStateDTO) => globalState.set(PlayerStateDTO.playerId,PlayerStateDTO))
})

socket.on(ServerSocketEvents.removePlayerFromMenu, (playerId) => {
    globalState.delete(playerId);
})


// socket.on(ServerSocketEvents.addPlayersToGlobalState,(data)=>{
//     data.forEach((element:any) => {
//         globalState.set(element.id,element)
        
//     });
// })



