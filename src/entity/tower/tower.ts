import { Bullet } from "../bullet";
import { Baddie } from "../baddie/baddie";
import { SlowEffect } from "../effect/slow-effect";
import { GameScene } from "../../scene/game-scene";

export class Tower extends Phaser.GameObjects.Sprite {

    private readonly buildTimeMS = 1000;
    private elapsedBuildTimeMS = 0;

    private readonly fireDelayMS = 120;
    private elapsedFireTimeMS = 0;

    private readonly fireDistance = 100;
    private readonly damage = 80;

    public scene: Phaser.Scene;
    public debugGraphics: Phaser.GameObjects.Graphics;

    private bullets: Phaser.Physics.Arcade.Group;
    private baddies: Phaser.GameObjects.Group;

    private typeIndex: number;

    constructor(scene: Phaser.Scene, x: number, y: number, typeIndex: number, baddies: Phaser.GameObjects.Group) {
        super(scene, x, y, 'towers');
        this.debugGraphics = (scene as GameScene).debugGraphics;
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
            key: 'bullets',
            classType: Bullet,
            max: 100,
            active: false,
            visible: false,
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

        let point = this.findBaddie();
        if (point) {
            this.shoot(point);
            this.elapsedFireTimeMS = 0;
        }
    }

    private findBaddie(): Phaser.Types.Math.Vector2Like {
        let baddies = this.scene.physics.overlapCirc(this.x, this.y, this.fireDistance);
        let distance = Infinity;
        let point = null;
        for (let i = 0, l = baddies.length; i < l; i++) {
            let baddie = baddies[i].gameObject as Phaser.GameObjects.Sprite;
            if (baddie instanceof Baddie && baddie.active) {
                const p = { x: baddie.x, y: baddie.y };
                const d = Phaser.Math.Distance.BetweenPoints(this, p);
                if (d <= distance) {
                    distance = d;
                    point = p;
                }
            }
        }

        return point;
    }

    private shoot(point: Phaser.Types.Math.Vector2Like) {
        /*
        var graphics = this.debugGraphics;
        graphics.lineStyle(1, 0xffd900, 0.8);
        graphics.strokeCircle(this.x, this.y, this.fireDistance);

        graphics.beginPath();
        graphics.lineStyle(1, 0xdd00aa, 0.05);
        graphics.moveTo(this.x, this.y);
        graphics.lineTo(point.x, point.y);
        graphics.closePath();
        graphics.stroke();
        */

        let bullet = this.bullets.get();
        bullet.fire({ x: this.x, y: this.y }, point);
    }

    private onShotCallback() {
        return (baddie: Baddie, bullet: Bullet) => {
            if (baddie.active) {
                if (this.typeIndex == 3) {
                    baddie.takeDamage(this.damage / 4);
                    baddie.applyEffect(new SlowEffect(baddie));
                } else {
                    baddie.takeDamage(this.damage);
                }
                bullet.destroy();
            }
        };
    }
};