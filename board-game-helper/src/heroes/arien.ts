import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const arien: Hero = {
    id: 'arien',
    name: 'Arien',
    activeMoves: [
        {
            name: 'Noble Blade',
            initiative: 11,
            defense: 2,
            movement: 1,
            attack: 4,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. Before the attack: You may move another you that is adjacent to the target 1 space.'
        },
        {
            name: 'Gush of Water',
            initiative: 8,
            defense: 3,
            movement: 4,
            attack: 3,
            range: 1
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range. After the attack: If the target is adjacent to you, push the target up to 2 spaces.'
        },
        {
            name: 'Aspiring Duelist',
            initiative: 9,
            defense: 5,
            movement: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Defense],
            effect: 'Ignore all minion defense modifiers.'
        },
        {
            name: 'Waveform',
            initiative: 4,
            defense: 3,
            movement: 2,
            range: 2, 
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Place yourself into a space in range without a spawn point and not adjacent to an empty spawn point.'
        },
        {
            name: 'Spellbreak',
            initiative: 13,
            defense: 3,
            radius: 3,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'This turn: Enemy heroes in radius, cannot perform skills, except on their gold cards.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'High Tide',
            initiative: 8,
            defense: 4,
            movement: 4,
            attack: 4,
            range: 2,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range. After the attack: If the target is adjacent to you, push the target up to 2 spaces'
        },
        {
            name: 'Rogue Wave',
            initiative: 9,
            defense: 4,
            movement: 4,
            attack: 4,
            range: 2,
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range. After the attack: If the target is adjacent to you, push the target up to 3 spaces.'
        },
        {
            name: 'Violent Torrent',
            initiative: 8,
            defense: 7,
            movement: 4,
            attack: 7,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack: Up to 1 enemy hero in any of the 3 spaces in a straight line directly behind the space target discards a card, if able.'
        }, 
        {
            name: 'Raging Waters',
            initiative: 9,
            defense: 7,
            movement: 4,
            attack: 7,
            color: ColorTypes.Red,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack: Up to 1 enemy hero in any of the 3 spaces in a straight line directly behind the space target discards a card, or is defeated. May repeat once on a different target.'
        },  
        {
            name: 'Expert Duelist',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Defense],
            effect: 'Ignore all minion defense modifiers. This turn: You are immune to all other enemy attack actions.'
        },
        {
            name: 'Master Duelist',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Defense],
            effect: 'Ignore all minion defense modifiers. This Turn: You are immune to all other enemy actions.'
        },
        {
            name: 'Slippery Ground',
            initiative: 10,
            defense: 6,
            movement: 3,
            radius: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'This turn: Enemies in radius cannot move more than 1 space with a movement action.'
        },
        {
            name: 'Deluge',
            initiative: 10,
            defense: 6,
            movement: 3,
            radius: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'This turn and next turn: Enemies in radius cannot move more than 1 space with a movement action.'
        },
        {
            name: 'Magical Current',
            initiative: 4,
            defense: 3,
            movement: 2,
            rangeL 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'Place yourself into a space in range without a spawn point and not adjacent to an empty spawn point.'
        },    
        {
            name: 'Stranger Tide',
            initiative: 3,
            defense: 4,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'Place yourself into a space in range without a spawn point.'
        },        
        {
            name: 'Arcane Swap',
            initiative: 4,
            defense: 3,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Swap with a minion or friendly hero in range.'
        },
       {
            name: 'Empowered Swap',
            initiative: 3,
            defense: 4,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Skill],
            effect: 'Swap with a unit or token in range.'
        },
        {
            name: 'Living Tsunami',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'After you perform a basic skill, you may trigger a minion battle in the battle zone you are in.'
        },
    ]
}

export default arien;
