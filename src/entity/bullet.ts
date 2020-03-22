export class Bullet extends Phaser.Physics.Arcade.Sprite {

    private readonly speed = 500;
    private readonly speedPerMS = Phaser.Math.GetSpeed(500, 1);
    private readonly distanceMaximum = 125;
    private distance = 0;

    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, 'bullet');
        this.resetAttributes();
    }

    private resetAttributes() {
        this.distance = 0;
    }

    fire(from, to) {
        this.resetAttributes();
        this.body.reset(from.x, from.y);
        this.setActive(true);
        this.setVisible(true);
        this.scene.physics.moveTo(
            this, to.x, to.y, this.speed);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        this.distance += this.speedPerMS * delta;
        if (this.x > window.innerWidth || this.x < 0
            || this.y > window.innerHeight || this.y < 0
            || this.distance >= this.distanceMaximum)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
};