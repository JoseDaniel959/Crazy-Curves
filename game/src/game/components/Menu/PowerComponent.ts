import ButtonComponent from "./ButtonComponent";
import UIComponent from "./UIComponent";

export default class PowerComponent extends UIComponent {;
    backwardButton: ButtonComponent;
    forwardButton: ButtonComponent;


    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, backWardButton: ButtonComponent, forwardButton: ButtonComponent,) {
        super(scene,x,y,texture);
        this.backwardButton = backWardButton;
        this.forwardButton = forwardButton;

        scene.add.image(x, y, 'BackwardButton').setScale(0.15)
    }


}