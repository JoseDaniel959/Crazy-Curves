import ButtonComponent from "./ButtonComponent";

export default class PowerComponent {
    scene: Phaser.Scene;
    x: number;
    y: number;
    backwardButton: ButtonComponent;
    forwardButton: ButtonComponent;


    constructor(scene: Phaser.Scene, x: number, y: number, backWardButton: ButtonComponent, forwardButton: ButtonComponent,) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.backwardButton = backWardButton;
        this.forwardButton = forwardButton;

        scene.add.image(x, y, 'BackwardButton').setScale(0.15)

    }


}