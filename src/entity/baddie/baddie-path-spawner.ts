import { Baddie } from './baddie';

export class BaddiePathSpawner {

    private readonly spawnDelayMS = 600;
    private readonly travelTimeMS = 8000;
    private readonly entityMaxCount = 80;

    private baddies: Phaser.GameObjects.Group;
    private parentGroup: Phaser.GameObjects.Group;

    private elapsedSpawnTimeMS = 0;

    private readonly xSpawnOffset = 20;
    private xSpawnOffsetCurrent = 0;

    private scene: Phaser.Scene;

    private path: Phaser.Curves.Spline;
    private graphics: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene, parentGroup: Phaser.GameObjects.Group) {
        this.scene = scene;
        this.baddies = this.scene.add.group({
            name: 'baddies-path',
            classType: Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true
        });
        this.parentGroup = parentGroup;
        this.create();
    }

    create() {
        for (let i = 0; i < this.entityMaxCount; i++) {
            let baddie = this.baddies.get();
            baddie.t = 0;
            baddie.i = i;
            baddie.vec = new Phaser.Math.Vector2();
            this.parentGroup.add(baddie);
        }
    
        this.path = new Phaser.Curves.Spline([
            20, 500,
            260, 450,
            300, 150,
            550, 145,
            745, 256,
            1045, 256,
            1100, 500
        ]);
    
        const points = this.path.points;
        for (var i = 0; i < points.length; i++)
        {
            var point = points[i];
            var handle = this.scene.add.image(point.x, point.y, 'dragcircle', 0).setInteractive();
            handle.setData('vector', point);
            this.scene.input.setDraggable(handle);
        }

        this.scene.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setFrame(1);
        });

        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            gameObject.data.get('vector').set(dragX, dragY);
        });
    
        this.scene.input.on('dragend', function (pointer, gameObject) {
            gameObject.setFrame(0);
        });
    
        this.scene.tweens.add({
            targets: this.baddies.getChildren(),
            t: 1,
            ease: 'Linear',
            duration: this.travelTimeMS,
            repeat: -1,
            delay: t => t.i * this.spawnDelayMS
        });
    
        this.graphics = this.scene.add.graphics();
    }

    update(time, delta) {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0xff00ff, 0.25);
    
        this.path.draw(this.graphics, 64);
    
        this.graphics.fillStyle(0xffff00, 1);
        const children = this.baddies.getChildren();
        for (let i = 0, l = children.length; i < l; i++) {
            let p = children[i] as any;
            this.path.getPoint(p.t, p.vec);
            p.x = p.vec.x;
            p.y = p.vec.y;
        }
    }

};