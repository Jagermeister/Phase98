import { Baddie } from "../baddie/baddie";
import { Tower } from "../tower/tower";

export interface IEntityEffect {
    name: string;
    isStackable: boolean

    update(delta: number);
    isCompleted(): boolean;

    onMovement(): number;
};

export abstract class Effect implements IEntityEffect {

    public readonly name: string;

    private tower: Tower;
    private baddie: Baddie;

    abstract readonly isStackable: boolean;

    abstract readonly duration: number;
    private elapsed: number = 0;

    readonly movementMultiplier: number = 1.0;

    constructor(tower: Tower, baddie: Baddie) {
        this.tower = tower;
        this.baddie = baddie;
    }

    isCompleted(): boolean {
        return this.elapsed >= this.duration;
    }

    update(delta: number) {
        this.elapsed += delta;
    }

    onMovement() {
        return this.movementMultiplier;
    };
}