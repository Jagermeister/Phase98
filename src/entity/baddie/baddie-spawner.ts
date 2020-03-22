import { Baddie } from '../baddie/baddie';

export class BaddieSpawner {

    private readonly spawnDelayMS = 150;
    private readonly entityMaxCount = 75;

    private baddies: Phaser.GameObjects.Group;
    private parentGroup: Phaser.GameObjects.Group;

    private elapsedSpawnTimeMS = 0;

    private readonly xSpawnOffset = 40;
    private xSpawnOffsetCurrent = 0;

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, parentGroup: Phaser.GameObjects.Group) {
        this.scene = scene;
        this.baddies = this.scene.add.group({
            name: 'baddies',
            classType: Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true
        });
        this.parentGroup = parentGroup;
    }

    update(time, delta) {
        this.elapsedSpawnTimeMS += delta;
        if (this.elapsedSpawnTimeMS >= this.spawnDelayMS) {
            this.elapsedSpawnTimeMS -= this.spawnDelayMS;
            this.xSpawnOffsetCurrent += this.xSpawnOffset;
            if (this.xSpawnOffsetCurrent > window.innerWidth/2) {
                this.xSpawnOffsetCurrent -= window.innerWidth/2;
            }
            let baddie = this.baddies.get();
            if (baddie) {
                baddie.spawn(this.xSpawnOffsetCurrent, 0);
                this.parentGroup.add(baddie);
            }
        }
    }

};