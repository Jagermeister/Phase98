import { BaddieSpawner } from '../entity/baddie/baddie-spawner';
import { Tower } from '../entity/tower/tower';

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

    private towerTypeIndex: number = 1;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('tower', './assets/tower.png');
        this.load.spritesheet('towers', './assets/towers.png', {frameWidth: 64, frameHeight: 65});
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

        this.setupTowerTypeChangeEvents();
        this.input.on('pointerup', this.towerAdd, this);
    }

    public update(time, delta) {
        this.spawners.forEach(s => s.update(time, delta));
    }

    private setupTowerTypeChangeEvents() {
        this.input.keyboard.on('keydown-ONE', () => this.setTowerType(1), this)
        this.input.keyboard.on('keydown-TWO', () => this.setTowerType(2), this)
        this.input.keyboard.on('keydown-THREE', () => this.setTowerType(3), this)
    }

    private setTowerType(towerType: number) {
        this.towerTypeIndex = towerType;
    }

    private towerAdd(pointer: any) {
        this.towers.add(new Tower(this, pointer.x, pointer.y, this.towerTypeIndex, this.baddies), true);
    }
}
