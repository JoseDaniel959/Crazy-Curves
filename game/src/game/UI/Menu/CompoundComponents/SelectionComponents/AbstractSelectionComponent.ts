import UIComponent from "../../UIComponent";

export default abstract class AbstractSelectionComponent extends UIComponent {
    private texturesKeyArray: string[] = [];
    private textureStartsWith: string;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number = 1, textureStartsWith: string) {
        super(scene, x, y, texture, scale);
        this.textureStartsWith = textureStartsWith;
        this.setTexturesKeyArray(this.scene.textures.getTextureKeys().filter((textureKey)=> textureKey.startsWith(this.textureStartsWith)))
        //this is the current texture the user is selecting
        this.texture = this.texturesKeyArray[0]
        console.log(this.texturesKeyArray)
    }

    public getTexturesKeyArray(): string[]{
        return this.texturesKeyArray;
    }

    public setTexturesKeyArray(newtexturesKeyArray: string[]): void{
        this.texturesKeyArray = newtexturesKeyArray;
    }

    public getTextureStartsWith(): string{
        return this.textureStartsWith;
    }

    public setTextureStartsWith(newTextureStartsWith: string):void{
        this.textureStartsWith = newTextureStartsWith;
    }
}