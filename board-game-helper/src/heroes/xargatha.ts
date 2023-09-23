import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const xargatha: Hero = {
    id: 'xargatha',
    name: 'Xargatha',
    activeMoves: [
        {
            name: 'Backlash',
            initiative: 11,
            defense: 2,
            movement: 1,
            attack: 3,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: This turn: After an action is performed (in full) which makes you discard a card, you may perform the primary action on an attack card in your discard.'
        },
        {
            name: 'Siren's Call',
            initiative: 1,
            defense: 3,
            range: 3,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'Target the nearest non-immune enemy unit in range not adjacent to you; move that unit up to 2 spaces along the shortest valid path towards you. May repeat once..'
        },
        {
            name: 'Dangerous Slash',
            initiative: 7,
            defense: 6,
            movement: 5,
            attack: 4,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. +1 Attack for every enemy unit adjacent to you.'
        },
        {
            name: 'Stone Gaze',
            initiative: 9,
            defense: 5,
            movement: 3,
            radius: 2,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'This turn: The nearest enemy heroes in radius are immune, cannot perform a movement action, and count as terrain.'
        },
        {
            name: 'Charming Aura',
            initiative: 5,
            defense: 3,
            movement: 2,
            radius: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Movement],
            effect: 'This round: Enemy melee minions in radius count as friendly minions when calculating defense totals.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Deadly Swipe',
            initiative: 8,
            defense: 7,
            movement: 5,
            attack: 3,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. +2 Attack for every enemy unit adjacent to you.'
        },
        {
            name: 'Lethal Spin',
            initiative: 8,
            defense: 7,
            movement: 5,
            attack: 2,
            color: ColorTypes.Red,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. +3 Attack for every enemy unit adjacent to you.'
        },
        {
            name: 'Longthrust',
            initiative: 8,
            defense: 4,
            movement: 4,
            attack: 4,
            range: 2,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range, not adjacent to you.'
        }, 
        {
            name: 'Rapid Thrusts',
            initiative: 8,
            defense: 4,
            movement: 4,
            attack: 5,
            range: 2
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range, not adjacent to you. After the attack: if you are adjacent to an enemy hero, may repeat once on a different target unit.'
        },  
        {
            name: 'Petrifying Stare',
            initiative: 10,
            defense: 6,
            movement: 3,
            radius: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'This turn: The nearest enemy heroes in radius are immune, cannot perform a movement action, and count as terrain.'
        },
        {
            name: 'Turn Into Statues',
            initiative: 10,
            defense: 6,
            movement: 3,
            radius: 3
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'This turn: Enemy heroes in radius are immune, cannot perform a movement action, and count as terrain.'
        },
        {
            name: 'Fresh Converts',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'If you are adjacent to a minion, you may retrieve a discarded card.'
        },
        {
            name: 'Devoted Followers',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Skill],
            effect: 'If you are adjacent to a minion, you may retrieve a discarded card and This turn: You are immune to attack actions.'
        },
        {
            name: 'Aura of Control',
            initiative: 4,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Movement],
            effect: 'This round: Enemy ranged and melee minions in radius count as friendly minions when calculating the defense total.'
        },    
        {
            name: 'Aura of Domination',
            initiative: 4,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Movement],
            effect: 'This round: All enemy minions in radius, including the immune ones, count as friendly minions when calculating the defense total.'
        },        
        {
            name: 'Constrict',
            initiative: 4,
            defense: 4,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Movement],
            effect: 'Next turn: Enemy heroes adjacent to you cannot move, except when performing a movement action on a gold card or a red card.'
        },
       {
            name: 'Deadly Embrace',
            initiative: 4,
            defense: 4,
            movement: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Movement],
            effect: 'Next turn: Enemy heroes adjacent to you cannot move, except when performing a movement action on a gold card..'
        },
        {
            name: 'Metamorphosis',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'You may move through obstacles period. Before you perform an you perform an action, one enemy hero adjacent to you discards a card, if able.'
        },
    ]
}

export default xargatha;
