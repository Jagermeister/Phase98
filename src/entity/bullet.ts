export class Bullet extends Phaser.GameObjects.Sprite {

    private readonly speed = Phaser.Math.GetSpeed(500, 1);

    private angularDirection: number;

    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, 'bullet');
    }

    fire(x, y, rad) {
        this.setPosition(x, y);
        this.angularDirection = rad;
    }

    update(time, delta) {
        this.x += Math.cos(this.angularDirection) * this.speed * delta;
        this.y += Math.sin(this.angularDirection) * this.speed * delta;
        if (this.x > window.innerWidth || this.x < 0
                || this.y > window.innerHeight || this.y < 0)
        {
            this.destroy();
        }
    }
};