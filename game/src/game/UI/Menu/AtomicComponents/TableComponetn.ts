import UIComponent from "../UIComponent";

export default class TableComponent extends UIComponent{
    
    constructor(scene: Phaser.Scene, x: number, y: number,scaleX:number,scaleY?:number){
        super(scene,x,y,"Table",scaleX)
    }
}