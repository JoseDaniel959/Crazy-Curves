import SpaceshipSprite from "../SpaceshipSprite";

export default abstract class AbstractBoost implements IPower {
    private spaceship: SpaceshipSprite;
    private time: number = 350;
    constructor(spaceship: SpaceshipSprite) {
        this.spaceship = spaceship;
    }

    physics(): void {
        throw new Error("Method not implemented.");
    }

    public getSpaceShip():SpaceshipSprite{
        return this.spaceship;
    }

    public setSpaceship(spaceship:SpaceshipSprite){
        this.spaceship = spaceship;
    }

    public getTime():number{
        return this.time;
    }
}