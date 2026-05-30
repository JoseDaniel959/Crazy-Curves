import UIComponent from "../UIComponent";

export default class TailComponent extends UIComponent {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number = 1) {
        super(scene, x, y, texture,scale)
        // this.phaserImage = scene.add.image(x, y, texture).setScale(scale).setFlipX(true)
    }



}