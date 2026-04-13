import { Physics } from "phaser"

export default class SpaceshipSprite extends Phaser.Physics.Arcade.Sprite{
    constructor(scene: Phaser.Scene, x: number, y: number){
        super(scene,x,y,"Spaceship")
        
        //adding the sprite to the scene
        scene.add.existing(this)
        scene.physics.add.existing(this)
        
        //setting sprite's hitbox
        this.setScale(0.10)
        this.setCircle(70,200,180)
        
    }
    
    idle(){
        this.setAngularVelocity(0);
    }

    moveLeft(){
        this.setAngularVelocity(100)
          console.log("ME PRESIONARON")
    }

    moveRight(){
        this.setAngularVelocity(-100)
          console.log("ME PRESIONARON")
    }
    
    
}