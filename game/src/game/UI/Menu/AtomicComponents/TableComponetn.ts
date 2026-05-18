import UIComponent from "../UIComponent";

export default class TableComponent extends UIComponent{
    
    constructor(scene: Phaser.Scene, x: number, y: number,  texture: string = "Table"){
        super(scene,x,y,texture)
    }
}