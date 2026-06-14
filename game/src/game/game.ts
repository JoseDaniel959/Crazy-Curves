import type { Types } from "phaser";
import { Game } from "phaser";
import Boot from "./Scenes/Boot"
import Preloader from "./Scenes/Preloader";
import MainMenu from "./Scenes/MainMenu";
import MainGame from "./Scenes/MainGame";
import indexStyles from "../indexStyles.css"
var config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1200,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: [Boot, Preloader, MainMenu, MainGame],
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    parent: 'game',
    dom: {
        createContainer: true,
    },
};

//css rules of the game
indexStyles
export const game = new Game(config);

//constants
export const SCREEN_WIDTH = game.canvas.width;
export const MID_SCREEN_WIDTH = SCREEN_WIDTH/2;

export const SCREEN_HEIGHT = game.canvas.height;






