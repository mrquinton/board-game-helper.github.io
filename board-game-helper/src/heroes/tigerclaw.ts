import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const tigerclaw: Hero = {
    id: 'tigerclaw',
    name: 'Tigerclaw',
    activeMoves: [
        {
            name: 'Blink Strike',
            initiative: 13,
            defense: 1,
            movement: 2,
            attack: 2,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Before the attack: Move 2 spaces in a straight line through an enemy unit; target that unit.'
        },
        {
            name: 'Hit and Run',
            initiative: 9,
            defense: 3,
            movement: 5,
            attack: 3,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: You may move 1 space.'
        },
        {
            name: 'Dodge',
            initiative: 10,
            defense: !,
            movement: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Defense],
            effect: 'Block a ranged attack.'
        },
        {
            name: 'Light-Fingered',
            initiative: 2,
            defense: 2,
            movement: 3,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Move up to 2 spaces, then take up to 1 coin from an enemy hero adjacent to you. Then move 2 spaces in a straight line, if able.'
        },
        {
            name: 'Blend into Shadows',
            initiative: 3,
            defense: 2,
            radius: 2,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'If you are adjacent to an obstacle, place yourself into a space in radius not adjacent to an enemy unit. Next turn: You are immune, and may move through units.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Combat Reflexes',
            initiative: 9,
            defense: 4,
            movement: 5,
            attack: 4,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may move 1 space. Target a unit adjacent to you. After the attack: If you did not move before the attack, you may move 1 space.'
        },
        {
            name: 'Leaping Strike',
            initiative: 10,
            defense: 4,
            movement: 5,
            attack: 4,
            color: ColorTypes.Red,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may move 1 space. Target a unit adjacent to you. After the attack: You may move 1 space.'
        },
        {
            name: 'Backstab',
            initiative: 9,
            defense: 6,
            movement: 5,
            attack: 4,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. +2 Attack if a friendly unit is adjacent to the target.'
        }, 
        {
            name: 'Backstab with a Ballista',
            initiative: 10,
            defense: 6,
            movement: 5,
            attack: 4,
            color: ColorTypes.Red,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. +3 Attack and this attack cannot be blocked, if a friendly unit is adjacent to the target.'
        },  
        {
            name: 'Sidestep',
            initiative: 11,
            defense: !,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Defense],
            effect: 'Block a ranged attack. If you do, you may move 2 spaces in a straight line.'
        },
        {
            name: 'Evade',
            initiative: 11,
            defense: !,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Defense],
            effect: 'Block a ranged attack. If you do, you may move 2 spaces in a straight line and you may swap this card with a card in your hand.'
        },
        {
            name: 'Parry',
            initiative: 11,
            defense: !,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Defense],
            effect: 'Block a non-ranged attack. The attacker discards a card, if able.'
        },
        {
            name: 'Riposte',
            initiative: 11,
            defense: !,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Defense],
            effect: 'Block a non-ranged attack. The attacker discards a card, or is defeated.'
        },
        {
            name: 'Pick Pocket',
            initiative: 2,
            defense: 2,
            movement: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Move up to 2 spaces, then take up to 2 coin from an enemy hero adjacent to you. Then move 2 spaces in a straight line, if able.'
        },    
        {
            name: 'Pick Pocket',
            initiative: 1,
            defense: 3,
            movement: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Move up to 2 spaces, then take up to 3 coin from an enemy hero adjacent to you. Then move 2 spaces in a straight line, if able.'
        },        
        {
            name: 'Poisoned Dagger',
            initiative: 2,
            defense: 2,
            movement: 3,
            range: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Give a hero in range a poison marker. Each Initiative Item.initiative and Attack Item.attack item of a hero with a poison marker reduces that value by 1, instead of increasing it by 1.'
        },
       {
            name: 'Poisoned Dart',
            initiative: 1,
            defense: 3,
            movement: 3,
            range: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Skill],
            effect: 'Give a hero in range a poison marker. Each Initiative Item.initiative, Attack Item.attack, and Defense Item.defense item of a hero with a poison marker reduces that value by 1, instead of increasing it by 1.'
        },
        {
            name: 'Cloak and Dagger',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'If you are immune: Before you perform (or repeat) any action, move up to 2 spaces; after you perform a basic attack, you may repeat it once on a different target.'
        },
    ]
}

export default tigerclaw;
