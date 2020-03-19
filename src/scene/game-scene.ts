import { Baddie } from '../entity/baddie';
import { Tower } from '../entity/tower';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Phase98',
};

export class GameScene extends Phaser.Scene {

    private towers: Tower[] = [];

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('baddie', './assets/space-baddie.png');
    }

    public create() {
        new Baddie(this, 400, 0);

        this.input.on('pointerup', function(pointer){
            this.towers.push(new Tower(this, pointer.x, pointer.y));
        }, this);
    }

    public update(time, delta) {
        this.towers.forEach(t => t.update(time, delta));
    }
}
