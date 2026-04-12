import type { Types } from "phaser";
import { Game } from "phaser";
import Boot from "./Scenes/Boot"
import Preloader from "./Scenes/Preloader";
import MainMenu from "./Scenes/MainMenu";
import MainGame from "./Scenes/MainGame";


    var config: Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [Boot,Preloader,MainMenu, MainGame],
        physics:{
            default:"arcade",
            arcade: {
            debug: true
        }
        },
         audio: {
            disableWebAudio: true
        },
        parent: 'phaser-example',
        dom:{
            createContainer: true,
        }
    };

    let game = new Game(config);
  
    
