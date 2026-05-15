import AbstractPower from "./AbstractProjectile";
import SpaceshipSprite from "../SpaceshipSprite";
export default class JumpPower {
    private spaceship: SpaceshipSprite;
    private time: number = 350;
    constructor(spaceship: SpaceshipSprite) {
        this.spaceship = spaceship;
    }

    physics(): void {
        this.spaceship.setScale(0.12);
        this.spaceship.setIsCheckCollisionsOn(false)
        setTimeout(() => {
            this.spaceship.setScale(0.10)
            this.spaceship.setIsCheckCollisionsOn(true)
        }, this.time);


    }

}