import { IEntityEffect } from "../effect/effect";

export class Baddie extends Phaser.GameObjects.Sprite {

    private image: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };

    private readonly speed = Phaser.Math.GetSpeed(125, 1);

    private readonly healthMax = 100;
    private health: number;

    private hasTakenDamage: boolean;

    private effects: IEntityEffect[];
    private effectNonStacking: Record<string, IEntityEffect>;

    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, 'baddie');
        this.reset();
    }

    private reset() {
        this.health = this.healthMax;
        this.effects = [];
        this.effectNonStacking = {};
        this.hasTakenDamage = false;
    }

    spawn(x, y) {
        this.reset();
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    }

    update(time, delta) {
        for(let i = 0, l = this.effects.length; i < l; i++) {
            let effect = this.effects[i];
            effect.update(delta);
            if(effect.isCompleted()) {
                this.effects.splice(i, 1);
                i--;
                l--;
            }
        }
        this.checkForDeath();

        if (this.hasTakenDamage) {
            this.setTintFill(0xff0000);
            this.hasTakenDamage = false;
        }
        else {
            this.clearTint();
        }

        let movementMultipler = this.effects.reduce((p, c) => p * c.onMovement(), 1.0);

        this.x += this.speed/4 * delta * movementMultipler;
        this.y += this.speed * delta * movementMultipler;
        if (this.x > window.innerWidth || this.y > window.innerHeight) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    takeDamage(damage: number) {
        this.health -= damage;
        this.hasTakenDamage = true;
        this.checkForDeath();
    }

    private checkForDeath() {
        if (this.health <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    applyEffect(effect: IEntityEffect) {
        // TODO 20200319 Should be moved to a manager
        // which knows how to add/remove effects.
        if (!effect.isStackable && effect.name in this.effectNonStacking) {
            delete this.effectNonStacking[effect.name];
            for(let i = 0, l = this.effects.length; i < l; i++) {
                let e = this.effects[i];
                if (e.name == effect.name) {
                    this.effects.splice(i, 1);
                    i--;
                    l--;
                }
            }
        }

        this.effects.push(effect);
        if (!effect.isStackable) {
            this.effectNonStacking[effect.name] = effect;
        }
    }
};