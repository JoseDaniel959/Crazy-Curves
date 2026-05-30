import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import SpaceshipComponent from "../../AtomicComponents/SpaceshipComponent";
import UIComponent from "../../UIComponent";
import AbstractSelectionComponent from "./AbstractSelectionComponent";

export default class SpaceshipSelectionComponent extends AbstractSelectionComponent {
    constructor(scene: Phaser.Scene, x: number, y: number, scale: number = 1, textureStartsWith: string) {
        super(scene, x, y, scale, textureStartsWith,new SpaceshipComponent(scene, x, y - 20, "SpaceshipBlue", scale));
        this.getAtomicComponent().getPhaserImage()
  
    }

    public nextTextureInArray(): void {
        this.getScene().game.events.emit("updatePlayerSelection")
        let newCurrentIndex = this.getCurrentIndex() + 1
        let nextTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (nextTextureInArray !== undefined) {
            this.getAtomicComponent().setTexture(nextTextureInArray)
            this.getAtomicComponent().getPhaserImage().destroy();
            this.setAtomicComponent(new SpaceshipComponent(this.getScene(), this.x, this.y - 20, this.getAtomicComponent().getTexture(), this.getScale()));
            this.setCurrentIndex(newCurrentIndex)

        }
    }

    public previousTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() -1 
        let previousTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (previousTextureInArray !== undefined) {
            this.getAtomicComponent().setTexture(previousTextureInArray)
            this.getAtomicComponent().getPhaserImage().destroy();
             this.setAtomicComponent(new SpaceshipComponent(this.getScene(), this.x, this.y - 20, this.getAtomicComponent().getTexture(), this.getScale()))
            this.setCurrentIndex(newCurrentIndex)
        }
    }

}