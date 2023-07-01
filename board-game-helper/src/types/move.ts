export enum MoveTypes {
    Skill,
    Attack,
    Movement,
    Ultimate
}

export enum ColorTypes {
    Silver,
    Gold,
    Blue,
    Green,
    Red
}

export enum Item {
    attack,
    defense,
    initiative,
    radius,
    range,
    movement
}

export default interface Move {
    name: string,
    initiative: number,
    color: ColorTypes,
    level: number,
    types: MoveTypes[],
    effect: string
    item?: Item,
    attack?: number,
    defense?: number,
    movement?: number,
    radius?: number,
    range?: number
}