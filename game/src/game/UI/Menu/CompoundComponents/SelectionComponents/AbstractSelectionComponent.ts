import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import UIComponent from "../../UIComponent";

export default abstract class AbstractSelectionComponent extends UIComponent {
    private currentIndex: number = 0;
    private texturesKeyArray: string[] = [];
    private textureStartsWith: string;
    private BackwardButton: ButtonComponent;
    private ForwardButton: ButtonComponent;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number = 1, textureStartsWith: string) {
        super(scene, x, y, texture, scale);
        this.textureStartsWith = textureStartsWith;
        this.setTexturesKeyArray(this.scene.textures.getTextureKeys().filter((textureKey) => textureKey.startsWith(this.textureStartsWith)))
        //this is the current texture the user is selecting
        this.texture = this.texturesKeyArray[this.currentIndex]
        console.log(this.texturesKeyArray)

        this.BackwardButton = new ButtonComponent(scene, x - 12, y + 28, 'BackwardButton', 0.1, () => this.previousTextureInArray())
        this.ForwardButton = new ButtonComponent(scene, x + 12, y + 28, 'ForwardButton', 0.1, () => this.nextTextureInArray())
    }
    abstract nextTextureInArray(): void

    abstract previousTextureInArray() : void

    public getTexturesKeyArray(): string[] {
        return this.texturesKeyArray;
    }

    public setTexturesKeyArray(newtexturesKeyArray: string[]): void {
        this.texturesKeyArray = newtexturesKeyArray;
    }

    public getTextureStartsWith(): string {
        return this.textureStartsWith;
    }

    public setTextureStartsWith(newTextureStartsWith: string): void {
        this.textureStartsWith = newTextureStartsWith;
    }

    public getCurrentIndex(): number {
        return this.currentIndex;
    }

    public setCurrentIndex(newIndex: number): void {
        this.currentIndex = newIndex;
    }
    public getBackwardButton(): ButtonComponent {
        return this.BackwardButton;
    }

    public setBackwardButton(backwardButton: ButtonComponent): void {
        this.BackwardButton = backwardButton;
    }

    public getForwardButton(): ButtonComponent {
        return this.ForwardButton;
    }

    public setForwardButton(forwardButton: ButtonComponent): void {
        this.ForwardButton = forwardButton;
    }

}