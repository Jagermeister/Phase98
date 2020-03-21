import { Effect } from "./effect";

export class SlowEffect extends Effect {
    public readonly name: string = "SLOW";
    public readonly isStackable: boolean = false;

    readonly duration = 2000;
    readonly movementMultiplier: number = 0.5;
}