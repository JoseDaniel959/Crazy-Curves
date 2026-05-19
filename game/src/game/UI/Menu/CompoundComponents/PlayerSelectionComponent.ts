import TableComponent from "../AtomicComponents/TableComponetn";
import UIComponent from "../UIComponent";
import PowerSelectionComponent from "./PowerSelectionComponent";

export default class PlayerSelectionComponent extends UIComponent{
    constructor(
        scene: Phaser.Scene, 
        x: number, 
        y: number,
        scale: number,
    ){
        super(scene,x,y,"backWardButton",1)
        new TableComponent(scene,x,y,1.5    )
        new PowerSelectionComponent(scene,x-50,y-50,"BackwardButton",0.15)
        new PowerSelectionComponent(scene,x-50,y+10,"BackwardButton",0.15)


        

    }
}