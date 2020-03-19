export class Tower {

    private readonly fillAlphaMinimum = 0.1;
    private readonly fillAlphaMaximum = 1.0;

    private readonly buildTimeMS = 1000;
    private elapsedTimeMS = 0;

    private rect: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.rect = scene.add.rectangle(x, y, 50, 50, 0xFFFFFF, 0.1);
    }

    update(time, delta) {
        this.elapsedTimeMS += delta;

        // TODO [20200318] Introduce states such as "Building",
        // "Defending", "Selling".
        this.rect.fillAlpha = this.getFillAlpha();
        if (this.isBuildingComplete()) {
            this.rect.fillColor = 0x00FFFF;
        }
    }

    private isBuildingComplete() {
        return this.elapsedTimeMS >= this.buildTimeMS;
    }

    private getFillAlpha() {
        if (this.isBuildingComplete()) {
            return this.fillAlphaMaximum;
        }

        let buildPercentage = this.elapsedTimeMS / this.buildTimeMS;
        let alphaCeiling = Math.min(buildPercentage, this.fillAlphaMaximum)
        return Math.max(alphaCeiling, this.fillAlphaMinimum);
    }
};