export enum MoveCardActions {
    discard = 'discard',
    retrieve = 'retrieve',
    upgrade = 'upgrade',
    select = 'select',
    downgrade = 'downgrade',
    discardToUpgrade = 'discardToUpgrade',
    freeUpgrade = 'freeUpgrade'
}

export enum MoveTypes {
    Skill = 'Skill',
    Attack = 'Attack',
    Movement = 'Movement',
    Defense = 'Defense',
    Basic = 'Basic',
    Ultimate = 'Ultimate'
}

export enum ColorTypes {
    Silver = 'Silver',
    Gold = 'Gold',
    Blue = 'Blue',
    Green = 'Green',
    Red = 'Red',
    Ultimate = 'Ultimate'
}

export enum Item {
    attack = 'attack',
    defense = 'defense',
    initiative = 'initiative',
    radius = 'radius',
    range = 'range',
    movement = 'movement'
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