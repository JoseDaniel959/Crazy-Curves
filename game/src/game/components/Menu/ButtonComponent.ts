export default class ButtonComponent {
    scene: Phaser.Scene;
    x: number;
    y: number;
    texture: string;
    scale: number;
    callBack: Function

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number, callBack: Function) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.texture = texture;
        this.scale = scale;
        this.callBack = callBack;

        //ButtonLogic
        const backWardButton = scene.add.image(x, y, texture).setScale(scale);
        backWardButton.setInteractive();
        backWardButton.on('pointerdown', callBack)

    }


}