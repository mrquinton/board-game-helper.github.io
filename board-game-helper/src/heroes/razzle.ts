import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const razzle: Hero = {
    id: 'razzle',
    name: 'Razzle',
    activeMoves: [
        {
            name: 'Stun Doubles',
            initiative: 13,
            defense: 1,
            movement: 1,
            attack: 1,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: For each of you in play, if able, spawn a new you adjacent to that one of you; Each of you is a separate hero, sharing cards, card states, markers, the initiative value, items, level and coins. Only one of you acts when performing actions. If you are defeated, remove all of you.'
        },
        {
            name: 'Phantom Strike',
            initiative: 9,
            defense: 4,
            movement: 4,
            attack: 4,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: You may remove another you in play (Only one of you is performing the attack action).'
        },
        {
            name: 'Alleyoop',
            initiative: 10,
            defense: 1,
            movement: 3,
            range: 2,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Swap places with a friendly hero in range.'
        },
        {
            name: 'Wanderlust',
            initiative: 2,
            defense: 1,
            movement: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Movement],
            effect: 'You may move through obstacles. (If all of you are defeated only one of you respawn)'
        },
        {
            name: 'Crowd Control',
            initiative: 13,
            defense: 2,
            radius: 4,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Defense, MoveTypes.Basic],
            effect: 'When defending, +2 defense for each of you in radius (not including the one performing this action). Remove one or more of you in play, except the last one of you.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Little Rascals',
            initiative: 2,
            defense: 1,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'You may remove another you. If you do, an enemy hero who was adjacent to that one of you discards a card, if able.'
        },
        {
            name: 'Hit and Gone',
            initiative: 9,
            defense: 4,
            movement: 4,
            attack: 4,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: If there is more than one of you in play, you may remove any one of you (Only one of you is performing the attack action).'
        },
        {
            name: 'Bedlam',
            initiative: 11,
            defense: 2,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Swap with an enemy unit, or a token, adjacent to you. May repeat once by a different you.'
        },
        {
            name: 'Group Performance',
            initiative: 11,
            defense: 2,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Swap places with a friendly hero in range.'
        },
        {
            name: 'Fay Trails',
            initiative: 2,
            defense: 1,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Movement],
            effect: 'You may move through obstalces. After you move, move one other you up to 1 space.'
        },
        {
            name: 'Rummage',
            initiative: 9,
            defense: 4,
            movement: 4,
            attack: 4,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: You may retrieve a discarded non-basic card (All of you share cards in hand, deck, and discard).'
        },
        {
            name: 'Troublemakers',
            initiative: 1,
            defense: 1,
            movement: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'You may remove another you. If you do, an enemy hero who was adjacent to that one of you discards a card, or is defeated.'
        },
        {
            name: 'Into Thin Air',
            initiative: 10,
            defense: 5,
            movement: 4,
            attack: 5,
            color: ColorTypes.Red,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: If there is more than one of you in play, you may remove any number of you, including all of you (If all are removed, you are not defeated. Respawn next turn).'
        },
        {
            name: 'Team Spirit',
            initiative: 11,
            defense: 2,
            movement: 3,
            range: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Swap places with a friendly hero in range. If there is more than one of you in play, you may remove any one of you in play.'
        },
        {
            name: 'Moving Shadows',
            initiative: 1,
            defense: 1,
            movement: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Movement],
            effect: 'You may move through obstacles. After you move, move one other you up to 2 spaces.'
        },
        {
            name: 'Ransack',
            initiative: 10,
            defense: 5,
            movement: 4,
            attack: 5,
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: You may retrieve a discarded card.'
        },
        {
            name: 'Razzle-Dazzle',
            initiative: 11,
            defense: 2,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Swap with an enemy unit, or a token, adjacent to you. You may push that unit or a token 1 space. May repeat once by a different you.'
        },
        {
            name: 'Fay Infestation',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'Once per turn, after you resolve a non-basic card, another you may perform one action on that card; it can be the same action.'
        },
    ]
}

export default razzle;