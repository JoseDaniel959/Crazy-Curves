import TailComponent from "../../AtomicComponents/TailComponent";
import AbstractSelectionComponent from "./AbstractSelectionComponent";

export default class TailSelectionComponent extends AbstractSelectionComponent {
    constructor(scene: Phaser.Scene, x: number, y: number, scale: number = 1, textureStartsWith: string) {
        super(scene, x, y, scale, textureStartsWith, new TailComponent(scene, x, y, "tailBlue", scale));
    }

    public nextTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() + 1
        let nextTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (nextTextureInArray !== undefined) {
            this.getAtomicComponent().setTexture(nextTextureInArray)
            this.getAtomicComponent().getPhaserImage().destroy();
            this.setAtomicComponent(new TailComponent(this.getScene(), this.x, this.y, this.getAtomicComponent().getTexture(), this.getScale()))
            this.setCurrentIndex(newCurrentIndex)
        }
    }

    public previousTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() - 1
        let previousTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (previousTextureInArray !== undefined) {
            this.getAtomicComponent().setTexture(previousTextureInArray)
            this.getAtomicComponent().getPhaserImage().destroy();
            this.setAtomicComponent(new TailComponent(this.getScene(), this.x, this.y, this.getAtomicComponent().getTexture(), this.getScale()))
            this.setCurrentIndex(newCurrentIndex)
        }
    }
} 