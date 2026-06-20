export const PhaserEvents = {
    updateSelectionCompononent: "1"
}


export const PhaserEventEmiter = (scene:Phaser.Scene, eventName:any, ...args: any[]) =>{
    scene.game.events.emit(eventName,args)
}