import type { Types } from "phaser";
import { Game } from "phaser";
import BootLoader from "./BootLoader"
    var config: Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [BootLoader],
        physics:{
            default:"arcade",
            arcade: {
            debug: true
        }
        },
    };

    let game = new Game(config);
  
    
