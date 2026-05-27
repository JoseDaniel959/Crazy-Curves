import TableComponent from "../../AtomicComponents/TableComponetn";
import UIComponent from "../../UIComponent";
import PowerSelectionComponent from "./PowerSelectionComponent";
import SpaceshipSelectionComponent from "./SpaceshipSelectionComponent";
import TailSelectionComponent from "./TailSelectionComponent";

export default class PlayerSelectionComponent extends UIComponent{
    
    
    constructor(
        scene: Phaser.Scene, 
        x: number, 
        y: number,
    ){
        super(scene,x,y,"backWardButton",1)
        new TableComponent(scene,x,y,1.5)

        scene.add.text(x+50,y-15,"HandSomeMCT")
        new SpaceshipSelectionComponent(scene,x-170,y,0.18,"Spaceship")
         new PowerSelectionComponent(scene,x-50,y-50,"BackwardButton",0.15)
         new PowerSelectionComponent(scene,x-50,y+10,"BackwardButton",0.15)    
         new TailSelectionComponent(scene,x-110,y-15,"Tail",0.5)    

    }
}