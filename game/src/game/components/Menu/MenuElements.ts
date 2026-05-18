import { off } from "node:cluster";
import DomElement from "../DomElement";
import ButtonComponent from "./ButtonComponent";
import PowerComponent from "./PowerComponent";
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
export const playerTable = (scene: Phaser.Scene, playerName: string, offset: number): void => {

    scene.add.image(500, 200 + offset,'Table').setScale(1.4,1.4)
    scene.add.image(340, 185 + offset, 'Spaceship').setScale(0.15).setFlipX(true)
    scene.add.image(375,185 + offset, 'Tail').setScale(0.5)  
    scene.add.text(480, 175 + offset, playerName,{fontSize:'3em'})
    
    const backWardButton  = scene.add.image(330,225,'BackwardButton').setScale(0.09)
    scene.add.image(350,225,'ForwardButton').setScale(0.09)
    const backWard1Button = new ButtonComponent(scene,410,168,'BackwardButton',0.09,()=>console.log("hola"))
    new PowerComponent(scene, 420,160, 'ForwardButton', backWard1Button,backWard1Button)

    const button = scene.add.dom(startButton.x, startButton.y, startButton.element, 'background-color: lime; width: 220px; height: 100px; font: 48px Arial', startButton.text)
    button.setInteractive()
    button.once('pointerdown', () => {
        scene.scene.start("MainGame")
    });
    backWardButton.setInteractive()
    backWardButton.on('pointerdown', ()=> console.log("me presionaron"))


}


// This displays the power inside the playerTable component
// const PowerComponent = (scene: Phaser.Scene, x:number, y:number, offset: number) =>{
//     //Power Image
//     scene.add.image(420,160+offset,'BackwardButton').setScale(0.15)
//     //Buttons Image
//     new ButtonComponent(scene,410,168,'BackwardButton',0.09,()=>console.log("hola"))
    
//     const fordWardButton = scene.add.image(430,186+offset,'ForwardButton').setScale(0.09)
// }
