import { Baddie } from './baddie';

export class BaddiePathSpawner {

    private readonly spawnDelayMS = 600;
    private readonly travelTimeMS = 8000;
    private readonly entityMaxCount = 80;
    private readonly startDelayMS = 1550;

    private baddies: Phaser.Physics.Arcade.Group;
    private parentGroup: Phaser.Physics.Arcade.Group;

    private scene: Phaser.Scene;

    private path: Phaser.Curves.Spline;
    private graphics: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene, parentGroup: Phaser.Physics.Arcade.Group) {
        this.scene = scene;
        this.baddies = this.scene.physics.add.group({
            name: 'baddies-path',
            classType: Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true,
        });
        this.parentGroup = parentGroup;
        this.create();
    }

    create() {
        for (let i = 0; i < this.entityMaxCount; i++) {
            let baddie = this.baddies.get();
            baddie.setDepth(1);
            baddie.t = 0;
            baddie.i = i;
            baddie.vec = new Phaser.Math.Vector2();
            this.parentGroup.add(baddie);
        }
    
        this.path = new Phaser.Curves.Spline([
            -20, 500,
            260, 450,
            300, 150,
            550, 145,
            745, 256,
            1045, 256,
            1100, 480
        ]);
    
        const points = this.path.points;
        for (var i = 0; i < points.length; i++)
        {
            var point = points[i];
            var handle = this.scene.add.image(point.x, point.y, 'dragcircle').setInteractive();
            handle.setData('vector', point);
            this.scene.input.setDraggable(handle);
        }

        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            gameObject.data.get('vector').set(dragX, dragY);
        });
    
        this.scene.tweens.add({
            targets: this.baddies.getChildren(),
            t: 1,
            ease: 'Linear',
            duration: this.travelTimeMS,
            delay: t => t.i * this.spawnDelayMS + this.startDelayMS
        });
    
        this.graphics = this.scene.add.graphics();
    }

    update(time, delta) {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0xffffff, 0.05);
        this.path.draw(this.graphics, 64);
        const children = this.baddies.getChildren();
        for (let i = 0, l = children.length; i < l; i++) {
            let p = children[i] as any;
            this.path.getPoint(p.t, p.vec);
            p.x = p.vec.x;
            p.y = p.vec.y;
        }
    }

};