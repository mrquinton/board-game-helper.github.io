import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const mortimer: Hero = {
    id: 'mortimer',
    name: 'Mortimer',
    activeMoves: [
        {
            name: 'Knife of the Living Dead',
            initiative: 11,
            defense: 3,
            movement: 1,
            radius: 4,
            attack: 4,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: Choose One - Remove all zombie tokens in play; Place a zombie token into each of up to 4 nearest empty spawn points in radius. - Move up to 4 zombie tokens in radius up to 2 spaces in the same direction.'
        },
        {
            name: 'Zombie Mob',
            initiative: 7,
            defense: 6,
            movement: 3,
            radius: 3,
            attack: 5,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may swap places with a zombie token in radius adjacent to an enemy hero, then remove that token. Target a unit adjacent to you.'
        },
        {
            name: 'Fan Gathering',
            initiative: 9,
            defense: 6,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'You may choose one - Move a zombie token in range 1 space. - A zombie token in range pushes an enemy unit adjacent to it 1 space.'
        },
        {
            name: 'Stage Dive',
            initiative: 5,
            defense: 3,
            movement: 2,
            range: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Swap yourself, or a friendly unit in range, with a zombie token in range.'
        },
        {
            name: 'Unearth',
            initiative: 1,
            defense: 3,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Defense, MoveTypes.Basic],
            effect: 'You may remove all zombie tokens in play; If there are no zombie tokens in play, place a zombie token into each of up to 4 nearest empty spawn points in radius. This round: Zombie tokens are not removed at the end of round.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Loyal Fanbase',
            initiative: 9,
            defense: 6,
            movement: 3,
            range: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Choose up to two times - Move a zombie token in range 1 space. - A zombie token in range pushes an enemy unit adjacent to it 1 space.'
        },
        {
            name: 'Braains!',
            initiative: 5,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'If an enemy hero in range is adjacent to a zombie token, gain 2 coins, If you do, you may retrieve a discarded card.'
        },
        {
            name: 'Power of the Horde',
            initiative: 7,
            defense: 6,
            movement: 3,
            radius: 4,
            attack: 5,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may swap places with a zombie token in a radius adjacent to an enemy hero, then remove that token. Target a unit adjacent to you.'
        },
        {
            name: 'Crowd Surf',
            initiative: 5,
            defense: 4,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Swap yourself, or a friendly unit in range, with a zombie token in range.'
        },
        {
            name: 'Spinning Strike',
            initiative: 11,
            defense: 2,
            movement: 1,
            attack: 4,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: This turn: Empty spaces adjacent to you count as obstacles for the enemy heroes.'
        },
        {
            name: 'Gravenade',
            initiative: 9,
            defense: 6,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'End of each turn, Choose one - Move a zombie token in range 1 space. - Remove a zombie token in range; An enemy hero who was adjacent to that token, discards a card, if able. Cancel this effect.'
        },
        {
            name: 'Undead Champion',
            initiative: 7,
            defense: 7,
            movement: 3,
            attack: 6,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack: This round: After an enemy hero in radius, and in the battle zone, is defeated, respawn a friendly minion in the space they were in.'
        },
        {
            name: 'Gravesplosion',
            initiative: 10,
            defense: 7,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'End of each turn, Choose One - Move a zombie token in range 1 space. - Remove a zombie token in range; An enemy hero who was adjacent to that token, discards a card, if able.'
        },
        {
            name: 'Lord of the Dead',
            initiative: 8,
            defense: 8,
            movement: 3,
            attack: 7,
            radius: 4,
            color: ColorTypes.Red,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack, This round: After an enemy hero in radius, and in the battle zone, is defeated, respawn a friendly minion in the space they were in, you may then trigger a minion battle.'
        },
        {
            name: 'Cult Following',
            initiative: 10,
            defense: 7,
            movement: 3,
            range: 4,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Choose up to three times - Move a zombie token in range 1 space. - A zombie token in range pushes an enemy unit adjacent to it 1 space.'
        },
        {
            name: 'Mosh Pit',
            initiative: 4,
            defense: 4,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Skill],
            effect: 'Swap yourself, or a friendly unit in range, with a zombie token in range. May repeat once.'
        },
        {
            name: 'Braaaaains!',
            initiative: 4,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'If an enemy hero in range is adjacent to a zombie token, gain 3 coins, If you do, you may retrieve a discarded card.'
        },
        {
            name: 'Army of Darkness',
            initiative: 8,
            defense: 7,
            movement: 3,
            radius: 4,
            attack: 6,
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Before the attack: You may swap places with a zombie token in radius adjacent to an enemy hero, then remove that token. Target a unit adjacent to you. May repeat once on a different target.'
        },
        {
            name: 'One with the Crowd',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'Each time before you perform an action, you may swap places with a zombie token in play. Each time after you perform an action, you may swap places with a zombie token in play.'
        },
    ]
}

export default mortimer;