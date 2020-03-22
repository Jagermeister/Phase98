import { Baddie } from '../baddie/baddie';

export class BaddieSpawner extends Phaser.Physics.Arcade.Group {

    private readonly spawnDelayMS = 150;
    private readonly entityMaxCount = 75;

    private readonly startDelayMS = 1550;
    private startElapsed = 0;

    private parentGroup: Phaser.Physics.Arcade.Group;

    private elapsedSpawnTimeMS = 0;

    private readonly xSpawnOffset = 40;
    private xSpawnOffsetCurrent = 0;

    constructor(scene: Phaser.Scene, parentGroup: Phaser.Physics.Arcade.Group) {
        super(scene.physics.world, scene);
        this.createMultiple({
            key: 'baddies',
            classType: Baddie,
            max: this.entityMaxCount,
            active: false,
            visible: false,
        });
        this.parentGroup = parentGroup;
    }

    update(time, delta) {
        this.startElapsed += delta;
        if (this.startElapsed >= this.startDelayMS) {
            this.elapsedSpawnTimeMS += delta;
            if (this.elapsedSpawnTimeMS >= this.spawnDelayMS) {
                this.elapsedSpawnTimeMS -= this.spawnDelayMS;
                this.xSpawnOffsetCurrent += this.xSpawnOffset;
                if (this.xSpawnOffsetCurrent > window.innerWidth/2) {
                    this.xSpawnOffsetCurrent -= window.innerWidth/2;
                }
                let baddie = this.get() as Baddie;
                if (baddie) {
                    baddie.spawn(this.xSpawnOffsetCurrent, 0);
                    this.parentGroup.add(baddie);
                }
            }
        }
        this.getChildren().forEach(b => b.update(time, delta));
    }

};