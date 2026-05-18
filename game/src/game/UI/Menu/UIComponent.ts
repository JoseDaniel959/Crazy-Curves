export default abstract class UIComponent {
    scene: Phaser.Scene;
    x: number;
    y: number;
    texture: string;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.texture = texture;
    }
}