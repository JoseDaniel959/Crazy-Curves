import UIComponent from "../UIComponent";

export default class TailComponent extends UIComponent {
    private phaserImage: Phaser.GameObjects.Image;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number = 1) {
        super(scene, x, y, texture)
        this.phaserImage = scene.add.image(x, y, texture).setScale(scale).setFlipX(true)
    }

    public getPhaserImage(): Phaser.GameObjects.Image {
        return this.phaserImage;
    }

    public setPhaserImage(phaserImage: Phaser.GameObjects.Image): void {
        this.phaserImage = phaserImage;
    }

}