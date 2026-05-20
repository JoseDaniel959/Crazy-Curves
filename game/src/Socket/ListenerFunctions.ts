import BootLoader from "../game/Scenes/MainGame"
import UIComponent from "../game/UI/Menu/UIComponent"
import { socket } from "./socketFunctions"

export const onNewPlayerFromServer = (scene:BootLoader,PlayerSelectionComponent: UIComponent):void =>{
    socket.on("newPlayerFromServer",(data: string[])=>{
        console.log(data)
    })
}