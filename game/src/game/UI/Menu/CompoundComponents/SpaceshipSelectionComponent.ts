import ButtonComponent from "../AtomicComponents/ButtonComponent";
import SpaceshipComponent from "../AtomicComponents/SpaceshipComponent";
import UIComponent from "../UIComponent";

export default class SpaceshipSelectionComponent extends UIComponent{
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string,scale: number = 1){
        super(scene, x, y, texture,scale);
        new SpaceshipComponent(scene,x,y-20,texture,scale)
        new ButtonComponent(scene,x-12, y+28, 'BackwardButton',0.1,()=>console.log("hola"))
        new ButtonComponent(scene,x+12, y+28, 'ForwardButton',0.1,()=>console.log("hola"))
        
    }
}