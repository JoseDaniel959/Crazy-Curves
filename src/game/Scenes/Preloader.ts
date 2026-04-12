import music1 from "../../assets/music/nastelbom-funk-437330.mp3"
export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
         this.load.audio('music1', [music1]);
    }
    create(){
      
        const element = this.add.dom(200,200,"button",'background-color: lime; width: 220px; height: 100px; font: 48px Arial', "Start")
        element.setInteractive();
     
        element.once('pointerdown', () => {
            this.scene.start("BootLoader")
        });
        
    }

}
