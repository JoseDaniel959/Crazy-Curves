import UIComponent from "./UIComponent";

export default class ButtonComponent extends UIComponent {
    scale: number;
    callBack: Function

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number, callBack: Function) {
        super(scene,x,y,texture);
        this.scale = scale;
        this.callBack = callBack;

        //ButtonLogic
        const backWardButton = scene.add.image(x, y, texture).setScale(scale);
        backWardButton.setInteractive();
        backWardButton.on('pointerdown', callBack)

    }


}