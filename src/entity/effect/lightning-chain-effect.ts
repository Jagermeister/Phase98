import { Effect } from "./effect";
import { Baddie } from "../baddie/baddie";
import { GameObjects } from "phaser";

export class LigntningChainEffect extends Effect {
    public readonly name: string = "CHAIN_LIGHTNING";
    public readonly isStackable: boolean = false;

    readonly duration = 300;
    readonly jumpDuration = 250;

    private jumpDurationElapsed = 0;
    private jumpsLeft: number;

    readonly damage = 1;
    private _isCompleted = false;

    private baddies: GameObjects.Group;

    constructor(baddie: Baddie, baddies: GameObjects.Group, jumpsLeft: number) {
        super(baddie);
        this.baddies = baddies;
        this.jumpsLeft = jumpsLeft;
        this.baddie.takeDamage(this.damage);
    }

    update(delta) {
        super.update(delta);
        this.jumpDurationElapsed += delta;
        if (this.jumpDurationElapsed > this.jumpDuration) {
            this.jumpDurationElapsed -= this.jumpDuration;
            if (this.jumpsLeft) {
                const closestBaddie = this.closest();
                if (closestBaddie) {
                    closestBaddie.applyEffect(new LigntningChainEffect(closestBaddie, this.baddies, this.jumpsLeft - 1));
                }

                this._isCompleted = true;
            }
        }
    }

    isCompleted() {
        return this._isCompleted;
    }

    private closest(): Baddie {
        // TODO [20200320] Move storage of all enemies into
        // a k-d tree to allow for fast space-based search.
        const range = 50;
        const baddies = this.baddies.getChildren();
        const closeBaddies = [];
        for(let i = 0, l = baddies.length; i < l; i++) {
            const baddie = baddies[i];
            if (this.baddie !== baddie) {
                const distance = Math.abs(Phaser.Math.Distance.BetweenPoints(this.baddie, baddie as Baddie));
                if (distance < range) {
                    closeBaddies.push(baddie);
                }
            }
        }

        if (closeBaddies) {
            return closeBaddies[Math.floor(Math.random() * closeBaddies.length)];
        }
    }
}