import Hero from "../types/hero";
import { ColorTypes, Item, MoveTypes } from "../types/move";

const wasp: Hero = {
    id: 'wasp',
    name: 'Wasp',
    activeMoves: [
        {
            name: 'Dazzling Dager',
            initiative: 12,
            defense: 2,
            movement: 1,
            attack: 3,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Attack, MoveTypes.Basic],
            effect: 'Target a unit adjacent to you. After the attack: Cancel active effects on skill cards of enemies adjacent to you. This turn: enemy heroes adjacent to you cannot perform skill actions.'
        },
        {
            name: 'Shock',
            initiative: 8,
            defense: 6,
            movement: 4,
            attack: 5,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack: Up to one enemy hero adjacent to you, except the target, discards a card, if able.'
        },
        {
            name: 'Lift Up',
            initiative: 9,
            defense: 5,
            movement: 3,
            radius: 2,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Move a unit or token not adjacent to you and in radius, up to 1 space, without moving it away from you, or closer to you.'
        },
        {
            name: 'Stop Projectiles',
            initiative: 4,
            defense: !,
            movement: 2,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Defense],
            effect: 'If the attacker is not adjacent to you, block a ranged attack.'
        },
        {
            name: 'Static Barrier',
            initiative: 11,
            defense: 2,
            radius: 2,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill, MoveTypes.Basic],
            effect: 'This turn: Enemy units in radius cannot move or fast travel out of radius. Enemy units outside of radius cannot move or fast travel into radius.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Electrocute',
            initiative: 9,
            defense: 6,
            movement: 4,
            radius: 2,
            attack: 5,
            color: ColorTypes.Red,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack: Up to one enemy hero in radius, except the target, discards a card, if able.'
        },
        {
            name: 'Deflect Projectiles',
            initiative: 3,
            defense: !,
            movement: 2,
            color: ColorTypes.Green,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Defense],
            effect: 'If the attacker is not adjacent to you, block a ranged attack. If you do, the attacker discards a card, if able.'
        },
        {
            name: 'Telekinesis',
            initiative: 3,
            defense: 3,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 2,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Place a unit or token in range, that is not in a straight line, into a space adjacent to you.'
        },
        {
            name: 'Charged Boomerang',
            initiative: 9,
            defense: 4,
            movement: 4,
            radius: 3,
            attack: 3,
            color: ColorTypes.Red,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range, not in a straight line.'
        },
        {
            name: 'Control Gravity',
            initiative: 10,
            defense: 5,
            movement: 3,
            radius: 2,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.defense,
            types: [MoveTypes.Skill],
            effect: 'Move a unit or token not adjacent to you and in radius, up to 1 space, without moving it away from you, or closer to you. May repeat once.'
        },
        {
            name: 'Kinetic Repulse',
            initiative: 10,
            defense: 5,
            movement: 3,
            color: ColorTypes.Blue,
            level: 2,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Push every enemy unit adjacent to you 2 spaces; each enemy hero that was stopped by an obstacle discards a card, if able.'
        },
        {
            name: 'Reflect Projectiles',
            initiative: 3,
            defense: !,
            movement: 2,
            color: ColorTypes.Green,
            level: 3,
            item: Item.radius,
            types: [MoveTypes.Movement],
            effect: 'If the attacker is not adjacent to you, block a ranged attack. If you do, the attacker discards a card, if able. This turn: You are immune to ranged attacks of heroes not adjacent to you.'
        },
        {
            name: 'Electroblast',
            initiative: 9,
            defense: 7,
            movement: 4,
            radius: 2,
            attack: 6,
            color: ColorTypes.Red,
            level: 3,
            item: Item.movement,
            types: [MoveTypes.Attack],
            effect: 'Target a unit adjacent to you. Before the attack: Up to one enemy hero in radius, except the target, discards a card, or is defeated.'
        },
        {
            name: 'Center of Mass',
            initiative: 10,
            defense: 6,
            movement: 3,
            range: 2,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.range,
            types: [MoveTypes.Skill],
            effect: 'Move a unit or token not adjacent to you and in radius, up to 1 space, without moving it away from you, or closer to you. May repeat up to two times.'
        },
        {
            name: 'Kinetic Blast',
            initiative: 10,
            defense: 6,
            movement: 3,
            color: ColorTypes.Blue,
            level: 3,
            item: Item.attack,
            types: [MoveTypes.Skill],
            effect: 'Push every enemy unit adjacent to you 3 spaces; each enemy hero that was stopped by an obstacle discards a card, if able.'
        },
        {
            name: 'Mass Telekinesis',
            initiative: 3,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 3,
            item: Item.initiative,
            types: [MoveTypes.Skill],
            effect: 'Place a unit or token in range, that is not in a straight line, into a space adjacent to you. May repeat once.'
        },
        {
            name: 'Thunder Boomerang',
            initiative: 9,
            defense: 4,
            movement: 4,
            range: 3,
            attack: 4,
            color: ColorTypes.Red,
            level: 3,
            item: Item.defense,
            types: [MoveTypes.Attack],
            effect: 'Target a unit in range, not in a straight line. If you defeat an enemy hero, may repeat once.'
        },
        {
            name: 'Thunder and Lightning',
            initiative: 0,
            color: ColorTypes.Ultimate,
            level: 4,
            types: [MoveTypes.Ultimate],
            effect: 'After you perform a basic skill one enemy hero in play discards a card, if able.'
        },
    ]
}

export default wasp;
