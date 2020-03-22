import { BaddieSpawner } from '../entity/baddie/baddie-spawner';
import { Tower } from '../entity/tower/tower';
import { SlowEffect } from '../entity/effect/slow-effect';
import { LigntningChainEffect } from '../entity/effect/lightning-chain-effect';
import { Map as Map } from '../map/map';
import { BaddiePathSpawner } from '../entity/baddie/baddie-path-spawner';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Phase98',
};

export class GameScene extends Phaser.Scene {

    // TODO [20200318] The configuration of spawners
    // would later belong with the idea of a specific
    // "level" and not live within the root GameScene.
    private spawners: any[] = [];
    private baddies: Phaser.Physics.Arcade.Group;
    private towers: Phaser.GameObjects.Group;

    private isPointerMiddleDown: boolean = false;

    private map: Map;

    private towerTypeIndex: number = 1;

    public debugGraphics: Phaser.GameObjects.Graphics;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('tower', './assets/tower.png');
        this.load.spritesheet('towers', './assets/towers.png', {frameWidth: 64, frameHeight: 65});
        this.load.image('baddie', './assets/space-baddie.png');
        this.load.image('bullet', './assets/enemy-bullet.png');
        this.load.image('desert-tiles', './assets/tmw_desert_spacing.png');
        this.load.image('dragcircle', './assets/desert_button.png');
        this.load.image('block', 'assets/desert_sand.png');
    }

    public create() {
        this.map = new Map(this);
        this.map.setTileIndexCallback([14], this.applySlowEffect, this);
        this.map.setTileIndexCallback([30], this.applyLigntningChainEffect, this);

        this.towers = this.add.group({
            classType: Tower,
            runChildUpdate: true
        });

        this.baddies = this.physics.add.group();
        this.spawners.push(new BaddieSpawner(this, this.baddies));
        this.spawners.push(new BaddiePathSpawner(this, this.baddies));
        this.setupTowerEvents();

        this.debugGraphics = this.add.graphics({ x: 0, y: 0});
    }

    public update(time, delta) {
        this.physics.collide(this.baddies, this.map.layer);
        this.spawners.forEach(s => s.update(time, delta));
    }

    private setupTowerEvents() {
        this.input.keyboard.on('keydown-ONE', () => this.setTowerType(1), this)
        this.input.keyboard.on('keydown-TWO', () => this.setTowerType(2), this)
        this.input.keyboard.on('keydown-THREE', () => this.setTowerType(3), this)
        this.input.on('pointerdown', this.pointStateUpdate, this);
        this.input.on('pointerup', this.towerAdd, this);
    }

    private setTowerType(towerType: number) {
        this.towerTypeIndex = towerType;
    }

    private pointStateUpdate(pointer: any) {
        this.isPointerMiddleDown = pointer.middleButtonDown();
    }

    private towerAdd(pointer: any) {
        if (this.isPointerMiddleDown && !pointer.middleButtonDown()) {
            this.isPointerMiddleDown = false;
            this.towers.add(new Tower(this, pointer.x, pointer.y, this.towerTypeIndex, this.baddies), true);
        }

        console.log(pointer.x, pointer.y);
    }

    private applySlowEffect(baddie, tile) {
        baddie.applyEffect(new SlowEffect(baddie));
    }

    private applyLigntningChainEffect(baddie, tile) {
        baddie.applyEffect(new LigntningChainEffect(baddie, this.baddies, 6));
    }
}
