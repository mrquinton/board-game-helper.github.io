import { GameStates } from "../components/inGame";
import Move, { Item } from "./move";

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
        } else {
            this.gameState = GameStates.PICK_MOVE
            this.selectedMove = null
            this.items = []
            this.gold = 0
            this.level = 1
            this.discardedMoves = []
        }
    }

    getHeartValue() {
        return Math.floor(this.level / 3) + 1
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

    endTurn() {
        if (this.selectedMove) {
            this.discardCard(this.selectedMove)
            this.selectedMove = null
            this.gameState = GameStates.PICK_MOVE
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
        }
    }

    discardCard(move: Move) {
        this.activeMoves = this.activeMoves.filter((card => {
            return card.name !== move.name
        }))
        this.discardedMoves.push(move)
    }

    addUpgradeItem(move: Move) {
        const alternateMoves = this.upgradeableMoves = this.upgradeableMoves.filter((card => {
            return card.color === move.color && card.level === move.level
        }))
        this.items.push(alternateMoves[0])
    }

    addUpgradeToHand(move: Move) {
        this.upgradeableMoves = this.upgradeableMoves.filter((card => {
            return card.name !== move.name
        }))
        this.activeMoves = this.activeMoves.filter((card => {
            return card.color === move.color
        }))
        this.activeMoves.push(move)
    }

    upgradeCard(move: Move) {
        this.addUpgradeToHand(move)
        this.addUpgradeItem(move)
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