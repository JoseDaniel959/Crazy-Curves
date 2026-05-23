import AbstractPower from "./AbstractProjectile";
import SpaceshipSprite from "../SpaceshipSprite";
import AbstractBoost from "./AbstractBoost";
export default class JumpBoost extends AbstractBoost {
    constructor(spaceship: SpaceshipSprite) {
        super(spaceship);
    }

    physics(): void {
        this.getSpaceShip().setScale(0.12);
        this.getSpaceShip().setIsCheckCollisionsOn(false);
        setTimeout(() => {
            this.getSpaceShip().setScale(0.10);
            this.getSpaceShip().setIsCheckCollisionsOn(true);
        },
            this.getTime()
        );


    }

}