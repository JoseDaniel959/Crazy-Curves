export default class TailSprite extends Phaser.Physics.Arcade.Sprite{
    constructor(scene: Phaser.Scene, x: number, y: number){
        super(scene,x,y,"Tail")
        
        //adding the sprite to the scene
        scene.add.existing(this)
        scene.physics.add.existing(this,true)
            
        //setting sprite's hitbox
        // this.setCircle(70,200,180)
       this.setBodySize(10,10)
       this.setDisplaySize(10,10)
    }


    
}