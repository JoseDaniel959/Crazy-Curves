import type { Types } from "phaser";
import { Game } from "phaser";
import Boot from "./Scenes/Boot"
import Preloader from "./Scenes/Preloader";
import MainMenu from "./Scenes/MainMenu";
import MainGame from "./Scenes/MainGame";
import indexStyles from "../indexStyles.css"

var config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: [Boot, Preloader, MainMenu, MainGame],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    parent: 'phaser-example',
    dom: {
        createContainer: true,
    },
};
indexStyles
let game = new Game(config);


