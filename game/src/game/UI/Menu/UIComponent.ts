export default abstract class UIComponent {
    scene: Phaser.Scene;
    x: number;
    y: number;
    texture: string;
    scale: number;
    private phaserImage: Phaser.GameObjects.Image;
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string,scale: number) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.texture = texture;
        this.scale = scale;
        this.phaserImage = scene.add.image(x, y, texture).setScale(scale)

    }

     public getTexture():string{
        return this.texture;
    }

    public setTexture(newTexture: string):void{
        this.texture = newTexture;
    }

      public getPhaserImage(): Phaser.GameObjects.Image {
        return this.phaserImage;
    }

    public setPhaserImage(phaserImage: Phaser.GameObjects.Image): void {
        this.phaserImage = phaserImage;
    }

    public destroy(){
        this.phaserImage.destroy();
    }

}