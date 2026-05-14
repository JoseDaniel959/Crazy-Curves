import { gameTitle,playerBox, playerDiv, } from '../../components/Menu/MenuElements';
import styles from '../../components/Menu/styles.css'
export default class MainMenu extends Phaser.Scene{
    constructor ()
    {
        super('MainMenu');
    }
    preload(){
    }

    create(){
        
        playerDiv(this,"HandsomeMCT",0)
        playerDiv(this,"HandsomeMCT",80)




        
    }

}
