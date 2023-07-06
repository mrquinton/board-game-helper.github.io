import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const takahide: Hero = {
    id: 'takahide',
    name: 'Takahide',
    activeMoves: [
        {
            name: 'Warlods Nobori',
            initiative: 8,
            defense: 8,
            movement: 5,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Movement, MoveTypes.Basic],
            effect: 'Swap this card with another gold card in your deck (This card start the game in your hand. The other two gold cards should be in your deck)'
        },
        {
            name: 'Glorious Strike',
            initiative: 10,
            defense: 2,
            movement: 1,
            radius: 3,
            attack: 4,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: A friendly hero in radius may swap their unresolved card with a card in their hand.'
        },
        {
            name: 'Seize the Moment',
            initiative: 9,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Choose a card in the discard of a friendly hero in radius. An enemy hero in radius discards a card of the same color, if able.'
        },
        {
            name: 'Battle Planning',
            initiative: 5,
            defense: 3,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Discard a resolved card of a friendly hero in range.'
        },
        {
            name: 'Bushido',
            initiative: 3,
            defense: 6,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Defense, MoveTypes.Basic],
            effect: 'Swap your gold card (resolved, in hand, or in the discard) with a gold card in your deck, if able. If used as a skill, repeat once in secret.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Set an Example',
            initiative: 11,
            defense: 2,
            movement: 1,
            radius: 4,
            attack: 4,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: A friendly hero in radius may swap their unresolved card with a card in their hand.'
        },
        {
            name: 'Paid in Blood',
            initiative: 4,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'A friendly hero in range may discard a card. If that hero has a non-basic card in the discard, that hero gains 1 coin and you may retrieve a discard card.'
        },
        {
            name: 'Press On',
            initiative: 10,
            defense: 4,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'A friendly hero in radius may retrieve a discarded card. If they do, that hero may move the number of spaces equal to that cards printed movement value in a straight line.'
        },
        {
            name: 'Strategize',
            initiative: 4,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Discard a resolved card of a hero in range.'
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
            name: 'Find Weakness',
            initiative: 10,
            defense: 4,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Choose a card in the discard of a friendly hero in radius. An enemy hero in radius discards a card of the same color, if able.'
        },
        {
            name: 'Press On',
            initiative: 10,
            defense: 4,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'A friendly hero in radius may retrieve a discarded card. If they do, that hero may move the number of spaces equal to that cards printed movement value in a straight line.'
        },
        {
            name: 'Warlords Naginata',
            initiative: 9,
            defense: 2,
            movement: 1,
            range: 2,
            attack: 3,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Targe a unit in range. After the attack: Swap this card with another gold card in your deck.'
        },
        {
            name: 'Warlords Kanabo',
            initiative: 7,
            defense: 7,
            movement: 3,
            attack: 7,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: Swap this card with another gold card in your deck.'
        },
        {
            name: 'Death Before Dishonor',
            initiative: 4,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'A friendly hero in range may discard a card. If that hero has a card in the discard, that hero gains 2 coins and you may retrieve a discarded card.'
        },
        {
            name: 'Commit Reserves',
            initiative: 10,
            defense: 5,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'A friendly hero in radius may retrieve a discarded card. If they do, both you and that hero, in any order, may move the number of spaces equal to that cards printed movement value in a straight line.'
        },
        {
            name: 'Hold My Sake',
            initiative: 11,
            defense: 3,
            movement: 1,
            radius: 4,
            attack: 4,
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. After the attack: A friendly hero in radius may swap their unresolved card with a card in their hand, or discard.'
        },
        {
            name: 'Banzai!',
            initiative: 10,
            defense: 5,
            movement: 2,
            radius: 4,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Choose a card in the discard of a friendly hero in radius. An enemy hero in radius discards a card of the same color - resolved, unresolved, or in hand.'
        },
        {
            name: 'The Art of War',
            initiative: 4,
            defense: 4,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Skill],
            effect: 'Discard a resolved card of a hero in range. May repeat once.'
        },
        {
            name: 'Shogun',
            initiative: 0,
            radius: 1,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'Enemy heroes in radius can only perform secondary actions.'
        },
    ]
}

export default takahide;