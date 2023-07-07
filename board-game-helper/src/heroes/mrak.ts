import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const mrak: Hero = {
    id: 'mrak',
    name: 'Mrak',
    activeMoves: [
        {
            name: 'Fissure',
            initiative: 11,
            defense: 3,
            movement: 1,
            attack: 4,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: Place a rock token in each empty space in a straight line of 3 spaces from you in any one direction. They count as both terrain and tokens. End of next turn: Unless you placed a rock token that turn, remove all rock tokens.'
        },
        {
            name: 'Seismic Slam',
            initiative: 7,
            defense: 6,
            movement: 3,
            attack: 7,
            radius: 3,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero in radius adjacent to terrain, discards a card, if able. (Secondary attack actions are always non-ranged)'
        },
        {
            name: 'Bulldoze',
            initiative: 8,
            defense: 6,
            movement: 2,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Movement],
            effect: 'If you moved in a straight line, push an enemy hero adjacent to you 1 space. (Moving zero spaces is not in a straight line)'
        },
        {
            name: 'Landslide',
            initiative: 6,
            defense: 4,
            movement: 2,
            range: 3,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Move an enemy unit in range to the empty space adjacent to terrain, nearest to that unit.'
        },
        {
            name: 'Stone Shards',
            initiative: 5,
            defense: 4,
            range: 5,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'Place up to 3 rock tokens; Tokens must be connected and each token must be adjacent to the same hero in range. Rock tokens count as both terrain and tokens. End of next turn: Unless you placed a rock token that turn, remove all rock tokens.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Stone Carapace',
            initiative: 7,
            defense: 1,
            movement: 4,
            attack: 6,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Movement],
            effect: 'This round: Whenever you would discard a card from your hand, you may discard this card instead. Instead of defending, you may discard this card. If you do, block the attack.'
        },
        {
            name: 'Seismic Assault',
            initiative: 7,
            defense: 7,
            movement: 3,
            radius: 4,
            attack: 7,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'An enemy hero in radius adjacent to terrain discards a card, if able. May repeat once on a different target.'
        },
        {
            name: 'Pulverize',
            initiative: 9,
            defense: 7,
            movement: 2,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Movement],
            effect: 'If you moved in a straight line, push an enemy hero adjacent to you 1 space. Then, if that hero is adjacent to terrain, that hero discards a card, if able.'
        },
        {
            name: 'Rolling Stone',
            initiative: 5,
            defense: 4,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill, MoveTypes.Defense],
            effect: 'This round: Double your printed movement values. Cancel this effect when you perform a non-movement action, then gain 1 coin.'
        },
        {
            name: 'Stomping Step',
            initiative: 9,
            defense: 7,
            movement: 2,
            radius: 2,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Movement],
            effect: 'This round: Enemy heroes in radius who are adjacent to terrain have -1 printed movement value to a minimum of 1.'
        },
        {
            name: 'Treacherous Ground',
            initiative: 5,
            defense: 4,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Defense, MoveTypes.Skill],
            effect: 'Move an enemy unit in range to the empty space adjacent to terrain, nearest to that unit.'
        },
        {
            name: 'Ground Shaker',
            initiative: 9,
            defense: 7,
            movement: 2,
            radius: 2,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Movement],
            effect: 'This round: Enemy heroes in radius who are adjacent to terrain have -1 printed movement value to a minimum of 1. You count as a hero and terrain.'
        },
        {
            name: 'Rolling Boulder',
            initiative: 5,
            defense: 5,
            movement: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Skill, MoveTypes.Defense],
            effect: 'This round: Double your printed movement values. You may move through obstacles. Cancel this effect when you perform a non-movement action, then gain 2 coins.'
        },
        {
            name: 'Epicentre',
            initiative: 8,
            defense: 7,
            movement: 3,
            radius: 4,
            attack: 8,
            color: ColorTypes.Red,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill, MoveTypes.Defense],
            effect: 'An enemy hero in radius adjacent to terrain discards a card, if able. May repeat once on a different target.'
        },
        {
            name: 'Rock Solid',
            initiative: 8,
            defense: 1,
            movement: 4,
            attack: 7,
            color: ColorTypes.Red,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Movement],
            effect: 'You may retrieve a discarded card. This round: Whenever you would discard a card from your hand, you may discard this card instead. Instead of defending, you may discard this card. If you do, block the attack.'
        },
        {
            name: 'Stone Trap',
            initiative: 5,
            defense: 5,
            movement: 2,
            range: 4,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Defense, MoveTypes.Skill],
            effect: 'Move an enemy unit in range to the empty space adjacent to terrain, nearest to that unit. May repeat once.'
        },
        {
            name: 'Grind to Dust',
            initiative: 9,
            defense: 7,
            movement: 2,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Movement],
            effect: 'If you moved in a straight line, push an enemy hero adjacent to you 1 or 2 spaces. Then, if that hero is adjacent to terrain, that hero discards a card, if able.'
        },
        {
            name: 'Rock and a Hard Place',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'After you place one or more rock tokens into one or more spaces adjacent to one or more enemy heroes, each of those heroes discards a card, if able.'
        },
    ]
}

export default mrak;