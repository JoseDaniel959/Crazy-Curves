import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import TailComponent from "../../AtomicComponents/TailComponent";
import UIComponent from "../../UIComponent";
import AbstractSelectionComponent from "./AbstractSelectionComponent";

export default class TailSelectionComponent extends AbstractSelectionComponent {
    private TailComponent: TailComponent
    constructor(scene: Phaser.Scene, x: number, y: number, scale: number = 1, textureStartsWith: string) {
        super(scene, x, y, "", scale, textureStartsWith);
        this.TailComponent = new TailComponent(scene, x, y, this.getTexture(), scale)
    }

    public nextTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() + 1
        let nextTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (nextTextureInArray !== undefined) {
            console.log("entroo")
            this.setTexture(nextTextureInArray)
            this.TailComponent.getPhaserImage().destroy();
            this.TailComponent = new TailComponent(this.scene, this.x, this.y, this.getTexture(), this.scale)
            this.setCurrentIndex(newCurrentIndex)
        }
    }

    public previousTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() - 1
        let previousTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (previousTextureInArray !== undefined) {
            this.setTexture(previousTextureInArray)
            this.TailComponent.getPhaserImage().destroy();
            this.TailComponent = new TailComponent(this.scene, this.x, this.y, this.getTexture(), this.scale)
            this.setCurrentIndex(newCurrentIndex)
        }
    }
} 