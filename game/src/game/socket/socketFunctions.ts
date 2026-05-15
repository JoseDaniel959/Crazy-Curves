import { io, Socket } from "socket.io-client";
import BootLoader from "../Scenes/MainGame";
export const socket: Socket = io();

export const emitNewPlayerInMenu = ():void =>{
    socket.emit("newPlayerInMenuFromClient")
}

// export const onNewPlayer = (scene:BootLoader):void =>{
//     console.log("se supone que entro 2")

//     socket.on("newPlayerFromServer",()=>{
//         console.log("me invocaron desde el server")
//         scene.setPlayer(new SpaceshipSprite(scene, 100, 100))
//     })
// }

export const onNewPlayerFromServer = (scene:BootLoader):void =>{

    socket.on("newPlayerFromServer",()=>{
    })
}