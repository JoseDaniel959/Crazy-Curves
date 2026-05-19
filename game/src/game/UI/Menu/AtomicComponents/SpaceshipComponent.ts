import UIComponent from "../UIComponent";

export default class SpaceshipComponent extends UIComponent{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string,scale: number = 1){
        super(scene, x, y, texture)
        scene.add.image(x,y,texture).setScale(scale).setFlipX(true)
    }
}