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
    private towers: Tower[] = [];

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('baddie', './assets/space-baddie.png');
    }

    public create() {
        this.spawners.push(new BaddieSpawner(this));

        this.input.on('pointerup', function(pointer){
            this.towers.push(new Tower(this, pointer.x, pointer.y));
        }, this);
    }

    public update(time, delta) {
        this.spawners.forEach(t => t.update(time, delta));
        this.towers.forEach(t => t.update(time, delta));
    }
}
