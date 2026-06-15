import UIComponent from "../UIComponent";

export default class TitleComponent extends UIComponent {

    constructor(scene: Phaser.Scene, x: number, y: number, scale: number) {
        super(scene,x,y,"MainTitle",scale);        
    }

    
}