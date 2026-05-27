import ButtonComponent from "../../AtomicComponents/ButtonComponent";
import SpaceshipComponent from "../../AtomicComponents/SpaceshipComponent";
import UIComponent from "../../UIComponent";
import AbstractSelectionComponent from "./AbstractSelectionComponent";

export default class SpaceshipSelectionComponent extends AbstractSelectionComponent {
    private SpaceshipComponent: SpaceshipComponent;
    
    constructor(scene: Phaser.Scene, x: number, y: number, scale: number = 1, textureStartsWith: string) {
        super(scene, x, y, "", scale, textureStartsWith);
        this.SpaceshipComponent = new SpaceshipComponent(scene, x, y - 20, this.getTexture(), scale)
  
    }

    public nextTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() + 1
        let nextTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (nextTextureInArray !== undefined) {
            console.log("entroo")
            this.setTexture(nextTextureInArray)
            this.SpaceshipComponent.getPhaserImage().destroy();
            this.SpaceshipComponent = new SpaceshipComponent(this.scene, this.x, this.y - 20, this.getTexture(), this.scale)
            this.setCurrentIndex(newCurrentIndex)
        }
    }

    public previousTextureInArray(): void {
        let newCurrentIndex = this.getCurrentIndex() -1 
        let previousTextureInArray = this.getTexturesKeyArray()[newCurrentIndex]

        if (previousTextureInArray !== undefined) {
            this.setTexture(previousTextureInArray)
            this.SpaceshipComponent.getPhaserImage().destroy();
            this.SpaceshipComponent = new SpaceshipComponent(this.scene, this.x, this.y - 20, this.getTexture(), this.scale)
            this.setCurrentIndex(newCurrentIndex)
        }
    }

}