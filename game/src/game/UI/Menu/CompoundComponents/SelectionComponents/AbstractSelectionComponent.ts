import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import UIComponent from "../../UIComponent";

export default abstract class AbstractSelectionComponent {
    protected x: number;
    protected y: number;
    private scale: number;
    private scene: Phaser.Scene;
    private atomicComponent: UIComponent;
    private currentIndex: number = 0;
    private texturesKeyArray: string[] = [];
    private textureStartsWith: string;
    private BackwardButton: ButtonComponent;
    private ForwardButton: ButtonComponent;
    constructor(
        scene: Phaser.Scene,
        x: number, y: number,
        scale: number = 1,
        textureStartsWith: string,
        atomicComponent: UIComponent
    ) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.textureStartsWith = textureStartsWith;
        this.scene = scene;
        this.setTexturesKeyArray(this.scene.textures.getTextureKeys().filter((textureKey) => textureKey.startsWith(this.textureStartsWith)))
        //this is the current texture the user is selecting
        // console.log(this.texturesKeyArray)
        this.atomicComponent = atomicComponent;
        this.BackwardButton = new ButtonComponent(scene, x - 12, y + 28, 'BackwardButton', 0.1, () => this.previousTextureInArray())
        this.ForwardButton = new ButtonComponent(scene, x + 12, y + 28, 'ForwardButton', 0.1, () => this.nextTextureInArray())
    }
    abstract nextTextureInArray(): void

    abstract previousTextureInArray(): void

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

    public getAtomicComponent(): UIComponent {
        return this.atomicComponent;
    }

    public setAtomicComponent(atomicComponent: UIComponent): void {
        this.atomicComponent = atomicComponent;
    }

    public getScene(): Phaser.Scene {
        return this.scene;
    }

    public setScene(scene: Phaser.Scene): void {
        this.scene = scene;
    }

    public getScale(): number {
        return this.scale;
    }

    public setScale(scale: number): void {
        this.scale = scale;
    }

    public destroy() {
        this.getAtomicComponent().getPhaserImage().destroy()
        this.getBackwardButton().getPhaserImage().destroy()
        this.getForwardButton().getPhaserImage().destroy()

    }
}