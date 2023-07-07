import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const emmitt: Hero = {
    id: 'emmitt',
    name: 'Emmitt',
    activeMoves: [
        {
            name: 'Reverse Time',
            initiative: 11,
            defense: 2,
            movement: 1,
            attack: 4,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack, Next Turn: Heroes with lower initiative act before heroes with higher initiative; This effect ignores immunity (Resolve the ties as normal).'
        },
        {
            name: 'Temporal Punch',
            initiative: 7,
            defense: 6,
            movement: 3,
            attack: 9,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. When defending this attack, the enemy hero must use the initiative value of their card and items instead of the defense value.'
        },
        {
            name: 'Time Snare',
            initiative: 8,
            defense: 3,
            movement: 2,
            range: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero in range, with no unresolved cards, discards a card, if able.'
        },
        {
            name: 'Try Again',
            initiative: 6,
            defense: 2,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Move an enemy hero in range, who remained in place this turn, 2 spaces in a straight line.'
        },
        {
            name: 'Unstable Timeline',
            initiative: 1,
            defense: 6,
            radius: 4,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Defense, MoveTypes.Basic],
            effect: 'Place 2 glitch tokens in radius, with at least two spaces between each token; If used as a defense, place 3 tokens instead. The nearest enemy hero chooses one of the glitch tokens; Swap with that token. End of turn: remove all glitch tokens.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Time Loop',
            initiative: 9,
            defense: 3,
            movement: 2,
            range: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Swap with an enemy hero in range with no unresolved cards.'
        },
        {
            name: 'Fast Forward',
            initiative: 5,
            defense: 2,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Move an enemy hero in range, who remained in place this turn, 2 spaces in a straight line.'
        },
        {
            name: 'Time Trap',
            initiative: 9,
            defense: 3,
            movement: 2,
            range: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero in range, with no unresolved cards, discards a card, if able.'
        },
        {
            name: 'Undo',
            initiative: 5,
            defense: 2,
            movement: 2,
            radius: 4,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'You, and friendly heroes in radius, may retrieve all cards discarded this turn.'
        },
        {
            name: 'Time Bubble',
            initiative: 7,
            defense: 7,
            movement: 3,
            attack: 5,
            radius: 1,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: Next turn: You and heroes in radius are immune to actions of heroes outside of radius and vice-versa.'
        },
        {
            name: 'Temporal Slam',
            initiative: 7,
            defense: 7,
            movement: 3,
            attack: 11,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. When defending this attack, the enemy hero must use the initiative value of their card and items instead of the defense value.'
        },
        {
            name: 'Time Bomb',
            initiative: 9,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero in range, with no unresolved cards, discards a card, or is defeated.'
        },
        {
            name: 'Back to the Future',
            initiative: 5,
            defense: 3,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Choose one - Place a unit in range into the space where that unit was at the start of this turn. - Move an enemy hero in range, who remained in place this turn, 2 spaces in a straight line.'
        },
        {
            name: 'Time Out',
            initiative: 5,
            defense: 3,
            movement: 2,
            radius: 4,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Choose one - You, and friendly heroes in radius, may retrieve all cards discarded this turn. - This turn: Friendly heroes in radius, are immune to enemy actions.'
        },
        {
            name: 'Deja Vu',
            initiative: 9,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Skill],
            effect: 'Choose one - Swap with an enemy hero in range with no unresolved cards. - An enemy hero in range swaps their unresolved card with their resolved card of their choice.'
        },
        {
            name: 'Temporal Judgement',
            initiative: 8,
            defense: 7,
            movement: 3,
            attack: 13,
            color: ColorTypes.Red,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. When defending this attack, the enemy hero must use the initiative value of their card and items instead of the defense value.'
        },
        {
            name: 'Chronosphere',
            initiative: 8,
            defense: 7,
            movement: 3,
            radius: 1,
            attack: 6,
            color: ColorTypes.Red,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: This turn and next turn: You and heroes in radius are immune to actions of heroes outside of radius and vice-versa.'
        },
        {
            name: 'Alternative Timelines',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'You may play two cards each turn. If you do, after the cards are revealed, retrieve one of your unresolved cards.'
        },
    ]
}

export default emmitt;