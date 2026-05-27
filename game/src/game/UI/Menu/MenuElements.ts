import { off } from "node:cluster";
import DomElement from "../DomElement";
import ButtonComponent from "./AtomicComponents/ButtonComponent";
import PowerSelectionComponent from "./CompoundComponents/SelectionComponents/PowerSelectionComponent";
import TableComponent from "./AtomicComponents/TableComponetn";
import PlayerSelectionComponent from "./CompoundComponents/SelectionComponents/PlayerSelectionComponent";
// export const gameTitleCSS: string = `
// font-family: 'Honk';`
export const gameTitleCSS: string = `color: white;`


export const boxCSS: string = ` 
    background-color: purple;
    width: 20vw;
    height: 3vw;
    border-radius: 30px;;`

export const gameTitle: DomElement = new DomElement(400, 0, 'h1', gameTitleCSS, 'Crazy Curves');
const startButton: DomElement = new DomElement(400, 550, 'button', undefined, "start")
// export const playerTable = (scene: Phaser.Scene, playerName: string, offset: number): void => {
//             new PlayerSelectionComponent(scene,500,200,)
// }


// This displays the power inside the playerTable component
// const PowerComponent = (scene: Phaser.Scene, x:number, y:number, offset: number) =>{
//     //Power Image
//     scene.add.image(420,160+offset,'BackwardButton').setScale(0.15)
//     //Buttons Image
//     new ButtonComponent(scene,410,168,'BackwardButton',0.09,()=>console.log("hola"))
    
//     const fordWardButton = scene.add.image(430,186+offset,'ForwardButton').setScale(0.09)
// }


 