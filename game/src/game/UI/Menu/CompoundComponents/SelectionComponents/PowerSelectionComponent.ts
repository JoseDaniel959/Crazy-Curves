import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import UIComponent from "../../UIComponent";
import AbstractSelectionComponent from "./AbstractSelectionComponent";

export default class PowerSelectionComponent extends AbstractSelectionComponent {
    
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number,) {
        super(scene,x,y,scale,"sdf", new ButtonComponent(scene,x-12, y+28, 'BackwardButton',0.1,()=>console.log("hola")));
        // power image

    }


    nextTextureInArray(): void {
        throw new Error("Method not implemented.");
    }
    previousTextureInArray(): void {
        throw new Error("Method not implemented.");
    }



}