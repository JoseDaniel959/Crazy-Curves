import type { Types } from "phaser";
import { Game } from "phaser";
import BootLoader from "./BootLoader"
import Preloader from "./Scenes/Preloader";
    var config: Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [Preloader,BootLoader],
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
  
    
