import { Scene } from "phaser";

//Spaceships Tails
import tailBlue from "../../assets/images/tails/blue_tail.png"
import tailGreen from "../../assets/images/tails/green_tail.png"
import tailOrange from "../../assets/images/tails/orange_tail.png"
import tailPurple from "../../assets/images/tails/purple_tail.png"
import tailRed from "../../assets/images/tails/red_tail.png"

//Spaceships sprites
import SpaceshipBlue from "../../assets/images/spaceships/Spaceship_01_BLUE.png"
import SpaceshipGreen from "../../assets/images/spaceships/Spaceship_02_GREEN.png"
import SpaceshipOrange from "../../assets/images/spaceships/Spaceship_04_ORANGE.png"
import SpaceshipPurple from "../../assets/images/spaceships/Spaceship_05_PURPLE.png"
import SpaceshipRed from "../../assets/images/spaceships/Spaceship_06_RED.png"




// UI Elements
import BackwardButton from "../../assets/UI/Buttons/Backward_BTN.png"
import ForwardButton from "../../assets/UI/Buttons/Forward_BTN.png"
import StartButton from "../../assets/UI/Buttons/Start_BTN.png"
import Table from "../../assets/UI/Table.png"
import MainTitle from "../../assets/UI/MainTitle.png"
import MainMenuBackground from "../../assets/images/background/BG.png"
import BackgroundAsset from "../../assets/images/background/BackgroundAsset.png"


//Music 
import music1 from "../../assets/music/nastelbom-funk-437330.mp3"


const loadAssets = (AssetsMap: Map<string, string>, Scene: Scene) => {
    AssetsMap.forEach((value, key) => {
        Scene.load.image(key, value);
    }
    )
};

const preloadTailsAssets = (Scene: Scene): void => {
    const tails = new Map([
        ["tailBlue", tailBlue],
        ["tailGreen", tailGreen],
        ["tailOrange", tailOrange],
        ["tailPurple", tailPurple],
        ["tailRed", tailRed],
    ]);

    loadAssets(tails, Scene);
}

const preloadSpaceshipAssets = (Scene: Scene): void => {
    const spaceships = new Map([
        ["SpaceshipBlue", SpaceshipBlue],
        ["SpaceshipGreen", SpaceshipGreen],
        ["SpaceshipOrange", SpaceshipOrange],
        ["SpaceshipPurple", SpaceshipPurple],
        ["SpaceshipRed", SpaceshipRed],
    ]);
    loadAssets(spaceships,Scene);
}

// const preloadAnimationsAssets = (Scene:Scene):void =>{
//     const animations  = new Map([
//         ["Explosion", Explosion],
    
//     ]);
//     loadAssets(animations,Scene);
// }

const preloadUIAssets = (Scene:Scene):void =>{
    const UI = new Map([
        ["BackwardButton",BackwardButton],
        ["ForwardButton",ForwardButton],
        ["StartButton",StartButton],
        ["Table",Table],
        ["MainTitle",MainTitle],
        ["MainMenuBackground",MainMenuBackground],
        ["BackgroundAsset",BackgroundAsset]
    ])
    loadAssets(UI,Scene);
}

const preloadAssets = (Scene: Scene): void => {
    preloadTailsAssets(Scene);
    preloadSpaceshipAssets(Scene);
    preloadUIAssets(Scene);
}

export default preloadAssets;

