import UIComponent from "../UIComponent";

export default class ButtonComponent extends UIComponent {
    callBack: Function

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number, callBack: Function) {
        super(scene,x,y,texture,scale);
        this.callBack = callBack;

        //ButtonLogic

        this.getPhaserImage().setInteractive();
        this.getPhaserImage().on('pointerdown', callBack)

    }


}