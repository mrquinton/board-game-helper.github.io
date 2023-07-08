import { GameStates } from "../components/inGame";
import Move, { ColorTypes, Item } from "./move";

export default interface Hero {
    id: string,
    name: string,
    activeMoves: Move[],
    upgradeableMoves: Move[]
}

export class InGameHero {
    id: string
    name: string
    gameState: GameStates
    selectedMove: Move | null
    activeMoves: Move[]
    upgradeableMoves: Move[]
    discardedMoves: Move[]
    items: Move[]
    gold: number
    level: number
    round: number
    turn: number

    constructor(hero: Hero | InGameHero) {
        this.id = hero.id
        this.name = hero.name
        this.activeMoves = [...hero.activeMoves]
        this.upgradeableMoves = [...hero.upgradeableMoves]
        if (hero instanceof InGameHero) {
            this.gameState = hero.gameState
            this.selectedMove = hero.selectedMove
            this.items = hero.items
            this.gold = hero.gold
            this.level = hero.level
            this.discardedMoves = hero.discardedMoves
            this.round = hero.round
            this.turn = hero.turn
        } else {
            this.gameState = GameStates.PICK_MOVE
            this.selectedMove = null
            this.items = []
            this.gold = 0
            this.level = 1
            this.discardedMoves = []
            this.round = 1
            this.turn = 1
        }
    }

    getHeartValue() {
        return Math.ceil(this.level / 3)
    }

    selectMove(move: Move) {
        if (this.selectedMove) {
            this.activeMoves.push(this.selectedMove)
        }
        this.selectedMove = move
        this.activeMoves = this.activeMoves.filter((card => {
            return card.name !== move.name
        }))
        this.gameState = GameStates.TAKE_TURN
    }

    canEndRound() {
        return this.turn === 4
    }

    endTurn() {
        if (this.selectedMove) {
            this.discardCard(this.selectedMove)
            this.selectedMove = null
            this.gameState = GameStates.PICK_MOVE
            this.turn += 1
        }
    }

    endRound() {
        if (this.canEndRound()) {
            this.endTurn()
            this.recoverCards(this.discardedMoves)
            this.turn = 1
            this.round += 1
        }
    }

    recoverCards(moves: Move[]) {
        this.discardedMoves = this.discardedMoves.filter((card => {
            return !moves.map(m => m.name).includes(card.name)
        }))
        this.activeMoves = [...this.activeMoves, ...moves]
    }

    addGold(amount: number) {
        this.gold += amount
    }

    removeGold(amount: number) {
        this.gold -= amount
    }

    canLevel() {
        return this.gold >= this.level
    }

    buyLevel() {
        if (this.canLevel()) {
            this.removeGold(this.level)
            this.level += 1
        }
    }

    discardCard(move: Move) {
        this.activeMoves = this.activeMoves.filter((card => {
            return card.name !== move.name
        }))
        this.discardedMoves.push(move)
    }

    moveCardFromHandToUpgrade(move: Move) {
        this.activeMoves = this.activeMoves.filter((card => {
            return card.name !== move.name
        }))
        this.upgradeableMoves.push(move)
    }

    moveCardFromDiscardToUpgrade(move: Move) {
        this.discardedMoves = this.discardedMoves.filter((card => {
            return card.name !== move.name
        }))
        this.upgradeableMoves.push(move)
    }

    addUpgradeItem(move: Move) {
        const alternateMoves = this.upgradeableMoves.filter((card => {
            return card.color === move.color && card.level === move.level
        }))
        const matchingColorMove = alternateMoves[0]
        this.upgradeableMoves = this.upgradeableMoves.filter((card => {
            return card.name !== matchingColorMove.name
        }))
        this.items.push(matchingColorMove)
    }

    addUpgradeToHand(move: Move) {
        this.upgradeableMoves = this.upgradeableMoves.filter((card => {
            return card.name !== move.name
        }))
        this.activeMoves.push(move)
    }

    removeMatchingColorCardFromHand(move: Move) {
        this.activeMoves = this.activeMoves.filter((card => {
            return card.color !== move.color
        }))
    }

    upgradeCard(move: Move) {
        if (this.canLevel() && [ColorTypes.Blue, ColorTypes.Red, ColorTypes.Green].includes(move.color)) {
            this.removeMatchingColorCardFromHand(move)
            this.addUpgradeToHand(move)
            this.addUpgradeItem(move)
            this.buyLevel()
        }
    }

    getItemBonuses() {
        const output = {
            [Item.attack]: 0,
            [Item.defense]: 0,
            [Item.initiative]: 0,
            [Item.movement]: 0,
            [Item.radius]: 0,
            [Item.range]: 0
        }
        for (const move of this.items) {
            if (move.item) {
                output[move.item] += 1
            }
        }

        return output
    }
}