import DomElement from "../DomElement";
// export const gameTitleCSS: string = `
// font-family: 'Honk';`
export const gameTitleCSS: string = `color: white;`


export const boxCSS: string = ` 
    background-color: purple;
    width: 20vw;
    height: 3vw;
    border-radius: 30px;;`

export const gameTitle: DomElement = new DomElement(400, 0, 'h1', gameTitleCSS, 'Crazy Curves');
export const playerBox: DomElement = new DomElement(400, 200, 'div', boxCSS)
const startButton: DomElement = new DomElement(400,550,'button',undefined,"start")
export const playerDiv = (scene: Phaser.Scene,playerName:string,offset:number): void => {
        
        scene.add.rectangle(400,200+ offset,500,70,0x008AB8)
        scene.add.image(200,200 + offset,'Spaceship').setScale(0.18).setFlipX(true)
         scene.add.text(400,190 + offset,playerName)   
        
        const button = scene.add.dom(startButton.x,startButton.y,startButton.element,'background-color: lime; width: 220px; height: 100px; font: 48px Arial', startButton.text)
        button.setInteractive() 
        button.once('pointerdown', () => {
            scene.scene.start("MainGame")

        });

}
