import { Baddie } from "../baddie/baddie";

export interface IEntityEffect {
    name: string;
    isStackable: boolean

    update(delta: number);
    isCompleted(): boolean;

    onMovement(): number;
};

export abstract class Effect implements IEntityEffect {

    public readonly name: string;

    protected baddie: Baddie;

    abstract readonly isStackable: boolean;

    abstract readonly duration: number;
    private elapsed: number = 0;

    readonly movementMultiplier: number = 1.0;

    constructor(baddie: Baddie) {
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