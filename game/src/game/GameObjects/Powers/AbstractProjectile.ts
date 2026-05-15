import SpaceshipSprite from "../SpaceshipSprite";

export default abstract class AbstractProjectile extends Phaser.Physics.Arcade.Sprite {
  private positionX: number;
  private positionY: number;
  private PowerVelocity: number;
  private PowerTexture: string;
  
  public constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    PowerVelocity: number,
  ) {
    super(scene, x, y, texture as string);
    this.positionX = x;
    this.positionY = y;
    this.PowerTexture = texture;
    this.PowerVelocity = PowerVelocity;

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  abstract physics() : void;

  // Getters
  public getPositionX(): number {
    return this.positionX;
  }

  public getPositionY(): number {
    return this.positionY;
  }

  public getPowerVelocity(): number {
    return this.PowerVelocity;
  }

  public getPowerTexture(): string {
    return this.PowerTexture;
  }

  // Setters
  public setPositionX(x: number): void {
    this.positionX = x;
    this.setX(x);
  }

  public setPositionY(y: number): void {
    this.positionY = y;
    this.setY(y);
  }

  public setPowerVelocity(PowerVelocity: number): void {
    this.PowerVelocity = PowerVelocity;
  }

  public setPowerTexture(texture: string): void {
    this.PowerTexture = texture;
    this.setTexture(texture as string);
  }
}