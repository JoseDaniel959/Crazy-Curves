import { socket } from "./socketFunctions"

export const emitNewPlayerInMenu = ():void =>{
    socket.emit("newPlayerInMenuFromClient")
}