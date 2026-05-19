import ButtonComponent from "../AtomicComponents/ButtonComponent";
import UIComponent from "../UIComponent";

export default class TailSelectionComponent extends UIComponent{
    backwardButton: ButtonComponent;
    forwardButton: ButtonComponent;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string,scale: number = 1){
        super(scene, x, y, texture)
        scene.add.image(x,y,texture).setScale(scale).setFlipX(true)
        this.backwardButton = new ButtonComponent(scene,x-12, y+28, 'BackwardButton',0.1,()=>console.log("hola"))
        this.forwardButton = new ButtonComponent(scene,x+12, y+28, 'ForwardButton',0.1,()=>console.log("hola"))
    }

} 