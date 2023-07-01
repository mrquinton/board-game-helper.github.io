import Hero from "../types/hero";
import { ColorTypes, MoveTypes } from "../types/move";

const nebkher: Hero = {
    id: 'nebkher',
    name: 'NebKher',
    activeMoves: [
        {
            name: 'Mind Grip',
            initiative: 9,
            defense: 2,
            movement: 1,
            color: ColorTypes.Gold,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Choose One: - Perform the primary action of the card in the previous turn slot of an enemy hero in range; apply no item bonuses. If you would place a token, place an illusion token instead. Ignore effects that give markers. - Defeat a minion adjacent to you.'
        },
        {
            name: 'Assume Control',
            initiative: 7,
            defense: 7,
            movement: 3,
            range: 2,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Choose One: - Before the attack: Move a friendly minion in range up to 3 spaces to a space adjacent to an enemy hero in range. Target that hero.  - Target a minion adjacent to you.'
        },
        {
            name: 'Fleeting Image',
            initiative: 6,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Place an  illusion token in radius. This round: After an action makes you discard a card, swap with an illusion token, regardless of radius, then remove that token.'
        },
        {
            name: 'Imbue Doubt',
            initiative: 9,
            defense: 5,
            movement: 2,
            radius: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'A hero in radius must swap their unresolved card with another card in their hand, if able.'
        },
        {
            name: 'Diabolical Laughter',
            initiative: 11,
            defense: 4,
            radius: 4,
            color: ColorTypes.Silver,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Laugh diabolically. If you do, choose one: - You swap with an illusion token in radius. - You swap with a friendly minion in radius. - You are defeated. Enemies gain no coins. - Next Turn: Gain +2  Initiative.'
        },
    ],
    upgradeableMoves: [
        {
            name: 'Assume Control',
            initiative: 7,
            defense: 7,
            movement: 3,
            range: 2,
            color: ColorTypes.Red,
            level: 1,
            types: [MoveTypes.Attack],
            effect: 'Choose One: - Before the attack: Move a friendly minion in range up to 3 spaces to a space adjacent to an enemy hero in range. Target that hero.  - Target a minion adjacent to you.'
        },
        {
            name: 'Fleeting Image',
            initiative: 6,
            defense: 4,
            movement: 2,
            radius: 3,
            color: ColorTypes.Green,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'Place an  illusion token in radius. This round: After an action makes you discard a card, swap with an illusion token, regardless of radius, then remove that token.'
        },
        {
            name: 'Imbue Doubt',
            initiative: 9,
            defense: 5,
            movement: 2,
            radius: 3,
            color: ColorTypes.Blue,
            level: 1,
            types: [MoveTypes.Skill],
            effect: 'A hero in radius must swap their unresolved card with another card in their hand, if able.'
        },
    ]
}

export default nebkher;