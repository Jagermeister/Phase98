export class Tower {

    private readonly chargeTime = 1000;
    private chargingTime = 0;

    private rect: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.rect = scene.add.rectangle(x, y, 50, 50, 0xFFFFFF, 0.1);
    }

    update(time, delta) {
        this.chargingTime += delta;
        this.rect.fillAlpha = Math.max(0.1, Math.min(this.chargingTime / this.chargeTime, 1.0));
        if (this.chargingTime >= this.chargeTime) {
            this.rect.fillColor = 0x00FFFF;
        }
    }

};