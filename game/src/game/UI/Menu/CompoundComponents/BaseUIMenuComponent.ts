import { MID_SCREEN_WIDTH } from "../../../game";
import BackgroundComponent from "../AtomicComponents/BackgrounComponent";
import TitleComponent from "../AtomicComponents/TitleComponent";
import UIComponent from "../UIComponent";

export default class BaseUIMenuComponent{

    constructor(scene: Phaser.Scene) {

        new BackgroundComponent(scene,MID_SCREEN_WIDTH,500,1)
        new TitleComponent(scene,MID_SCREEN_WIDTH,150,0.5)

    

    }

    


}