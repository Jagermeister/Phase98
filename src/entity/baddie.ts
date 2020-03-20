export class Baddie extends Phaser.GameObjects.Sprite {

    private image: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };

    private readonly speed = Phaser.Math.GetSpeed(100, 1);

    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, 'baddie');
    }

    spawn(x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    }

    update(time, delta) {
        this.x += this.speed/4 * delta;
        this.y += this.speed * delta;
        if (this.x > window.innerWidth || this.y > window.innerHeight) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
};