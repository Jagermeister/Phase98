export class Baddie {

    private image: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.image = scene.add.sprite(x, y, 'baddie') as any;
        scene.physics.add.existing(this.image);
        this.image.body.setVelocity(50, 50);
    }

    update(time, delta) {

    }

};