import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import SpaceshipComponent from "../../AtomicComponents/SpaceshipComponent";
import UIComponent from "../../UIComponent";
import AbstractSelectionComponent from "./AbstractSelectionComponent";

export default class SpaceshipSelectionComponent extends AbstractSelectionComponent{
    
    constructor(scene: Phaser.Scene, x: number, y: number,scale: number = 1, textureStartsWith: string){
        super(scene, x, y, "", scale, textureStartsWith);
        
        new SpaceshipComponent(scene,x,y-20,this.getTexture(),scale)
        new ButtonComponent(scene,x-12, y+28, 'BackwardButton',0.1,()=>console.log(this.getTexturesKeyArray()))
        new ButtonComponent(scene,x+12, y+28, 'ForwardButton',0.1,()=>console.log("hola"))
    }


}