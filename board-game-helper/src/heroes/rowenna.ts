import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const rowenna: Hero = {
    id: 'rowenna',
    name: 'Rowenna',
    activeMoves: [
        {
            name: 'Code of Chivalry',
            initiative: 11,
            defense: 2,
            movement: 1,
            attack: 4,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. Before the attack: If you target a hero, both you and the target may retrieve a discarded card.'
        },
        {
            name: 'Token of Gratitude',
            initiative: 8,
            defense: 7,
            movement: 4,
            radius: 1,
            attack: 6,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: A friendly hero in radius gains 1 coin.'
        },
        {
            name: 'Stand Guard',
            initiative: 9,
            defense: 5,
            movement: 2,
            range: 2,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Swap with a friendly unit in range, which is adjacent to an enemy hero.'
        },
        {
            name: 'Close Quarters',
            initiative: 4,
            defense: 3,
            movement: 2,
            radius: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Movement],
            effect: 'If you move to a space adjacent to an enemy hero, you may place an enemy minion in radius into a space adjacent to you.'
        },
        {
            name: 'Throw the Gauntlet',
            initiative: 7,
            defense: 3,
            range: 3,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'If able, place yourself into a space in range, adjacent to a target enemy hero in range. Next turn: you are immune to actions of enemy heroes who are not adjacent to you.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Fair Share',
            initiative: 8,
            defense: 7,
            movement: 4,
            radius: 2,
            attack: 6,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: A friendly hero in radius gains 1 coin.'
        },
        {
            name: 'Melee',
            initiative: 4,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Movement],
            effect: 'If you move to a space adjacent to an enemy hero, you may place an enemy minion in radius into a space adjacent to you.'
        },
        {
            name: 'Opening Shots',
            initiative: 4,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'If both you, and an enemy hero in radius, have no cards in the discard, that hero discards a card, if able.'
        },
        {
            name: 'Feats of Bravery',
            initiative: 8,
            defense: 7,
            movement: 4,
            radius: 2,
            attack: 6,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: a friendly hero in radius may retrieve a discarded card.'
        },
        {
            name: 'Show Mercy',
            initiative: 10,
            defense: 6,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'You may retrieve a discarded non-attack card. This round: The first time after an enemy hero in radius discards a card, that hero may retrieve that card.'
        },
        {
            name: 'Protect the Weak',
            initiative: 10,
            defense: 6,
            movement: 2,
            range: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Swap with a friendly unit in range, which is adjacent to an enemy hero.'
        },
        {
            name: 'Grand Melee',
            initiative: 3,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Movement],
            effect: 'If you move to a space adjacent to an enemy hero, you may place up to two enemy minions in radius into spaces adjacent to you, ignoring immunity.'
        },
        {
            name: 'Paragon of Grace',
            initiative: 9,
            defense: 8,
            movement: 4,
            radius: 2,
            color: ColorTypes.Red,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: A friendly hero in radius gains 2 coins.'
        },
        {
            name: 'Defend the Innocent',
            initiative: 10,
            defense: 6,
            movement: 2,
            range: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Skill],
            effect: 'You may swap with a friendly unit in range, which is adjacent to an enemy hero. End of turn: May repeat once.'
        },
        {
            name: 'Make Peace',
            initiative: 10,
            defense: 6,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Skill],
            effect: 'You may retrieve a discarded card. This round: The first time after an enemy hero in radius discards a card, that hero may retrieve that card.'
        },
        {
            name: 'Opening Volley',
            initiative: 3,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'If both you, and an enemy hero in radius, have no cards in the discard, that hero discards a card, if able. May repeat once.'
        },
        {
            name: 'Paragon of Valor',
            initiative: 9,
            defense: 8,
            movement: 4,
            radius: 4,
            attack: 7,
            color: ColorTypes.Red,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack, a friendly hero in radius may retrieve a discarded card.'
        },
        {
            name: 'Purification',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'After you retrieve a discarded card, you may remove all enemy minions adjacent to you. After another hero retrieves a discarded card, you may remove all enemy minions adjacent to that hero.'
        },
    ]
}

export default rowenna;