import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const widget: Hero = {
    id: 'widget',
    name: 'Widget',
    activeMoves: [
        {
            name: 'Fight as One',
            initiative: 11,
            defense: 2,
            movement: 1,
            attack: 3,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: You may perform the primary action on your resolved Skill card.'
        },
        {
            name: 'Distracting Strike',
            initiative: 8,
            defense: 6,
            movement: 5,
            attack: 5,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: Move Pyro up to 2 spaces.'
        },
        {
            name: 'Dragon Breath',
            initiative: 4,
            defense: 3,
            movement: 2,
            range: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero not adjacent to you, and in range of Pyro, discards a card, if able.'
        },
        {
            name: 'Yank Aside',
            initiative: 9,
            defense: 5,
            movement: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Move Pyro, and an enemy unit adjacent to her 1 space each, in the same direction.'
        },
        {
            name: 'Dragon Bond',
            initiative: 13,
            defense: 3,
            radius: 2,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'Place Pyro into a space in radius. Pyro is a separate hero Widget controls. Pyro cannot gain coins. Before or after Widget performs a movement action, Pyro may move up to 2 spaces. If Pyro would be defeated, or made to discard a card, remove Pyro instead.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Distracting Attack',
            initiative: 8,
            defense: 7,
            movement: 5,
            attack: 5,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: Move Pyro up to 3 spaces.'
        },
        {
            name: 'Gobble Up',
            initiative: 4,
            defense: 3,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Remove an enemy minion adjacent to Pyro. Remove Pyro.'
        },
        {
            name: 'Drag Down',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Move both Pyro, and an enemy unit adjacent to her 2 spaces each, in the same direction.'
        },
        {
            name: 'Air Support',
            initiative: 10,
            defense: 6,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'Swap Pyro with a friendly hero in range of Pyro.'
        },
        {
            name: 'Takeoff',
            initiative: 8,
            defense: 6,
            movement: 5,
            attack: 5,
            radius: 3,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: Swap places with Pyro in radius.'
        },
        {
            name: 'Dragon Fire',
            initiative: 4,
            defense: 3,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero not adjacent to you, and in range of Pyro, discards a card, if able.'
        },
        {
            name: 'On the Move',
            initiative: 9,
            defense: 6,
            movement: 5,
            radius: 3,
            color: ColorTypes.Red,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: Swap places with Pyro in radius. You may then move 1 space.'
        },
        {
            name: 'Devour Whole',
            initiative: 3,
            defense: 4,
            movement: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Skill],
            effect: 'Defeat a minion adjacent to Pyro. Remove Pyro.'
        },
        {
            name: 'Evacuate',
            initiative: 10,
            defense: 6,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'Swap Pyro with a friendly hero in range of Pyro. Move Pyro 1 space.'
        },
        {
            name: 'Carry Away',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Move both Pyro, and an enemy unit adjacent to her 2 spaces each, in the same direction, ignoring obstacles.'
        },
        {
            name: 'Distracting Assault',
            initiative: 9,
            defense: 7,
            movement: 5,
            attack: 6,
            color: ColorTypes.Red,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: Move Pyro up to 3 spaces, ignoring obstacles.'
        },
        {
            name: 'Set Ablaze',
            initiative: 3,
            defense: 4,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero not adjacent to you, and in range of Pyro, discards a card, if able. May repeat once on a different hero.'
        },
        {
            name: 'Clever Girl',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'After you perform a basic action an enemy hero adjacent to Pyro discards a card, or is defeated.'
        },
    ]
}

export default widget;