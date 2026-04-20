export default abstract class AbstractProjectile extends Phaser.Physics.Arcade.Sprite {
  private positionX: number;
  private positionY: number;
  private projectileVelocity: number;
  private ProjectileTexture: string;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    projectileVelocity: number
  ) {
    super(scene, x, y, texture as string);

    this.positionX = x;
    this.positionY = y;
    this.ProjectileTexture = texture;
    this.projectileVelocity = projectileVelocity;

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

  public getprojectileVelocity(): number {
    return this.projectileVelocity;
  }

  public getProjectileTexture(): string {
    return this.ProjectileTexture;
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

  public setprojectileVelocity(projectileVelocity: number): void {
    this.projectileVelocity = projectileVelocity;
  }

  public setProjectileTexture(texture: string): void {
    this.ProjectileTexture = texture;
    this.setTexture(texture as string);
  }
}