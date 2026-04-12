export default class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create(){
      
        const element = this.add.dom(200,200,"button",'background-color: lime; width: 220px; height: 100px; font: 48px Arial', "Start")
        element.setInteractive();
     
        element.once('pointerdown', () => {
            this.scene.start("MainGame")
        });
        
    }

}
