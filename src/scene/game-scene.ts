import { BaddieSpawner } from '../entity/baddie-spawner';
import { Tower } from '../entity/tower';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Phase98',
};

export class GameScene extends Phaser.Scene {

    // TODO [20200318] The configuration of spawners
    // would later belong with the idea of a specific
    // "level" and not live within the root GameScene.
    private spawners: BaddieSpawner[] = [];
    private baddies: Phaser.GameObjects.Group;
    private towers: Phaser.GameObjects.Group;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('tower', './assets/tower.png');
        this.load.image('baddie', './assets/space-baddie.png');
        this.load.image('bullet', './assets/enemy-bullet.png');
    }

    public create() {
        this.towers = this.add.group({
            classType: Tower,
            runChildUpdate: true
        });

        this.baddies = this.physics.add.group();

        this.spawners.push(new BaddieSpawner(this, this.baddies));
        this.input.on('pointerup', function(pointer){
            this.towers.add(new Tower(this, pointer.x, pointer.y, this.baddies), true);
        }, this);
    }

    public update(time, delta) {
        this.spawners.forEach(s => s.update(time, delta));
    }
}
