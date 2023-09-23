import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const brogan: Hero = {
    id: 'brogan',
    name: 'Brogan',
    activeMoves: [
        {
            name: 'Onslaught',
            initiative: 11,
            defense: 3,
            movement: 1,
            attack: 3,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack move into the space it occupied.'
        },
        {
            name: 'Mad Dash',
            initiative: 7,
            defense: 7,
            movement: 3,
            attack: 6,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: Move 2 spaces in a straight line to a space adjacent to an enemy unit, then target that unit.'
        },
        {
            name: 'Bulldoze',
            initiative: 9,
            defense: 6,
            movement: 2,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Choose one: - Remove a token adjacent to you. - Push an enemy minion adjacent to you up to 2 spaces.'
        },
        {
            name: 'Shield',
            initiative: 5,
            defense: 4,
            movement: 2,
            radius: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'This round: if a friendly melee minion in radius would be defeated, you may discard a card. If you do, the minion is not defeated.'
        },
        {
            name: 'Bulwark',
            initiative: 5,
            defense: 4,
            radius: 2,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'Choose one: - This round: You and friendly units in radius cannot be moved, pushed, swapped, or forced to move by enemy heroes. - If your discard is empty, retrieve this card.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Bullrush',
            initiative: 7,
            defense: 8,
            movement: 3,
            attack: 6,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: Move 2 or 3 spaces in a straight line to a space adjacent to an enemy unit, then target that unit.'
        },
        {
            name: 'Throwing Axe',
            initiative: 7,
            defense: 6,
            movement: 4,
            range: 1+,
            attack: 3,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may discard a card. If you do, +2 Range. Target a unit in range.'
        },
        {
            name: 'Crushing Punch',
            initiative: 9,
            defense: 7,
            movement: 2,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Move up to 1 space, then Choose one: - Remove a token adjacent to you. - Push an enemy minion adjacent to you up to 2 spaces.'
        },
        {
            name: 'Bolster',
            initiative: 5,
            defense: 5,
            movement: 2,
            radius: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'This round: If a friendly non-heavy minion in radius would be defeated, you may discard a card. If you do, the minion is not defeated.'
        },
        {
            name: 'Shield Bash',
            initiative: 9,
            defense: 7,
            movement: 2,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero adjacent to you, who has played an attack card this turn discards a card, if able.'
        },
        {
            name: 'War Drummer',
            initiative: 5,
            defense: 5,
            movement: 2,
            rangeL 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'A friendly unit in range may retrieve a discarded card if either of you are adjacent to an enemy unit.'
        },
        {
            name: 'Savage Kick',
            initiative: 10,
            defense: 7,
            movement: 2,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Move up to 1 space, then Choose one: - Remove a token adjacent to you. - Push an enemy unit adjacent to you up to 2 spaces.'
        },
        {
            name: 'Fortify',
            initiative: 4,
            defense: 5,
            movement: 2,
            radius: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'This round: If a friendly minion in radius would be defeated, you may discard a card. If you do, the minion is not defeated.'
        },
        {
            name: 'Furious Charge',
            initiative: 8,
            defense: 8,
            movement: 3,
            attack: 7,
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: Move 2, 3, or 4 spaces in a straight line to a space adjacent to an enemy unit, then target that unit..'
        },
        {
            name: 'Rock Solid',
            initiative: 8,
            defense: 6,
            movement: 4,
            attack: 4,
            range: 1+,
            color: ColorTypes.Red,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may discard a card. +2 Range if you have a card in the discard. Target a unit in range.'
        },
        {
            name: 'Master Skald',
            initiative: 4,
            defense: 5,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'A friendly unit in range may retrieve either resolved or discarded card if either of you are adjacent to an enemy unit'
        },
        {
            name: 'Counterattack',
            initiative: 10,
            defense: 7,
            movement: 2,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero adjacent to you, who has played an attack card this turn discards a card, or is defeated.'
        },
        {
            name: 'One Man Army',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'You count as two minions during minion battle. If you would be removed during minion battle, you lose the push instead.'
        },
    ]
}

export default brogan;
