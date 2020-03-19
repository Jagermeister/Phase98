export class Bullet {

    private image: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };

    constructor(scene: Phaser.Scene, x: number, y: number, vx: number, vy: number) {
        this.image = scene.add.image(x, y, 'bullet') as any;
        scene.physics.add.existing(this.image);
        this.image.body.setVelocity(vx, vy);
    }
};