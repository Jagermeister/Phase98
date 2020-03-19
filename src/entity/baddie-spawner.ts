import { Baddie } from '../entity/baddie';

export class BaddieSpawner {

    private readonly spawnDelayMS = 100;
    private readonly entityMaxCount = 50;

    private baddies: Phaser.GameObjects.Group;

    private elapsedSpawnTimeMS = 0;

    private readonly xSpawnOffset = 50;
    private xSpawnOffsetCurrent = 0;

    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.baddies = this.scene.add.group({
            classType: Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true
        });
    }

    update(time, delta) {
        this.elapsedSpawnTimeMS += delta;
        if (this.elapsedSpawnTimeMS >= this.spawnDelayMS) {
            this.elapsedSpawnTimeMS -= this.spawnDelayMS;
            this.xSpawnOffsetCurrent += this.xSpawnOffset;
            if (this.xSpawnOffsetCurrent > window.innerWidth) {
                this.xSpawnOffsetCurrent -= window.innerWidth;
            }
            let baddie = this.baddies.get();
            if (baddie) {
                baddie.spawn(this.xSpawnOffsetCurrent, 0);
            }
        }
    }

};