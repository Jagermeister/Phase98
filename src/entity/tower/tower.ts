import { Bullet } from "../bullet";
import { Baddie } from "../baddie/baddie";
import { SlowEffect } from "../effect/slow-effect";

export class Tower extends Phaser.GameObjects.Sprite {

    private readonly fillAlphaMinimum = 0.1;
    private readonly fillAlphaMaximum = 1.0;

    private readonly buildTimeMS = 1000;
    private elapsedBuildTimeMS = 0;

    private readonly fireDelayMS = 120;
    private elapsedFireTimeMS = 0;

    private readonly fireDistance = 120;
    private readonly damage = 80;

    public scene: Phaser.Scene;
    private bullets: Phaser.GameObjects.Group;
    private baddies: Phaser.GameObjects.Group;

    private typeIndex: number;

    constructor(scene: Phaser.Scene, x: number, y: number, typeIndex: number, baddies: Phaser.GameObjects.Group) {
        super(scene, x, y, 'towers');
        scene.anims.create({
            key: 'building',
            frames: scene.anims.generateFrameNames('towers', { start: 0, end: 0 }),
            duration: this.buildTimeMS
        });
        scene.anims.create({
            key: 'basic',
            frames: scene.anims.generateFrameNames('towers', { start: 2, end: 2 })
        });
        scene.anims.create({
            key: 'upgrading',
            frames: scene.anims.generateFrameNames('towers', { start: 1, end: 1 }),
            duration: this.buildTimeMS
        });
        scene.anims.create({
            key: 'advanced',
            frames: scene.anims.generateFrameNames('towers', { start: 3, end: 3 })
        });
        scene.anims.create({
            key: 'slow',
            frames: scene.anims.generateFrameNames('towers', { start: 4, end: 4 })
        });

        this.typeIndex = typeIndex;
        this.scene = scene;
        this.baddies = baddies;
        this.bullets = scene.physics.add.group({
            classType: Bullet,
            runChildUpdate: true
        });
        this.scene.physics.add.overlap(this.baddies, this.bullets, this.onShotCallback());

        let completedAnimation = this.typeIndex == 1 ? 'basic'
            : (this.typeIndex == 2 ? 'advanced' : 'slow');
        this.anims.play('building', true).on('animationcomplete', () => this.anims.play(completedAnimation, true));
    }

    update(time, delta) {
        this.elapsedBuildTimeMS += delta;
        this.elapsedFireTimeMS += delta;

        // TODO [20200318] Introduce states such as "Building",
        // "Defending", "Selling".
        if (this.isBuildingComplete()) {
            this.findTargetAndFire();
        } else {
            this.elapsedFireTimeMS = 0;
        }
    }

    private isBuildingComplete() {
        return this.elapsedBuildTimeMS >= this.buildTimeMS;
    }

    private isReadyToFire() {
        return this.elapsedFireTimeMS >= this.fireDelayMS;
    }

    private findTargetAndFire() {
        if (!this.isReadyToFire()){
            return;
        }

        let baddie = this.findBaddie();
        if (baddie) {
            this.shoot(baddie);
            this.elapsedFireTimeMS = 0;
        }
    }

    private findBaddie(): Phaser.GameObjects.Sprite {
        let baddies = this.baddies.getChildren();
        for(let i = 0, l = baddies.length; i < l; i++) {
            let baddie = baddies[i] as Phaser.GameObjects.Sprite;
            if (baddie.active) {
                let distance = Phaser.Math.Distance.BetweenPoints(this, baddie);
                if (distance <= this.fireDistance) {
                    return baddie;
                }
            }
        }
    }

    private shoot(baddie: Phaser.GameObjects.Sprite) {
        let angle = Phaser.Math.Angle.BetweenPoints(this, baddie);
        let bullet = this.bullets.get();
        bullet.fire(this.x, this.y, angle);
    }

    private onShotCallback() {
        return (baddie: Baddie, bullet: Bullet) => {
            if (this.typeIndex == 3) {
                baddie.takeDamage(this.damage / 4);
                baddie.applyEffect(new SlowEffect(this, baddie));
            } else {
                baddie.takeDamage(this.damage);
            }
            bullet.destroy();
        };
    }
};