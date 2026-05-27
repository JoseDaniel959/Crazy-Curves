export default abstract class UIComponent {
    scene: Phaser.Scene;
    x: number;
    y: number;
    texture: string;
    scale: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string,scale: number = 1) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.texture = texture;
        this.scale = scale;

    }

     public getTexture():string{
        return this.texture;
    }

    public setTexture(newTexture: string):void{
        this.texture = newTexture;
    }

}