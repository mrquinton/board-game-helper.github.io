import { Button, Stack, Typography } from "@mui/material";
import Hero from "../types/hero";
import { useState } from "react";
import MoveList from "./moveList";
import Move from "../types/move";
import MoveDisplay from "./moveDisplay";
import HeroStats from "./heroStats";

export enum GameStates {
    PICK_MOVE,
    TAKE_TURN,
}

export enum CardLocations {
    HAND,
    DISCARD,
    UPGRADES
}

export interface InGameProps {
    hero: Hero
}
export default function InGame({hero}: InGameProps) {
    const [gameState, setGameState] = useState(GameStates.PICK_MOVE)
    const [viewLocation, setViewLocation] = useState(CardLocations.HAND)
    const [selectedMove, setSelectedMove] = useState<Move | null>(null)
    const [cardsInHand, setCardsInHand] = useState(hero.activeMoves)
    const [cardsInDiscard, setCardsInDiscard] = useState<Move[]>([])
    const [upgradeableCards, setUpgradeableCards] = useState<Move[]>(hero.upgradeableMoves)

    const selectMove = (move: Move) => {
        setSelectedMove(move)
        setGameState(GameStates.TAKE_TURN)
    }

    const discardMove = (move: Move) => {
        const filteredHand = cardsInHand.filter((card => {
            return card.name !== move.name
        }))
        setCardsInHand(filteredHand)
        setCardsInDiscard([...cardsInDiscard, move])
    }

    const addUpgradeToHand = (move: Move) => {
        const filteredUpgradeableCards = upgradeableCards.filter((card) => {
            return card.name !== move.name
        })
        setUpgradeableCards(filteredUpgradeableCards)
        setCardsInHand([...cardsInHand, move])
    }

    const addDiscardToHand = (move: Move) => {
        const filteredDiscardedCards = cardsInDiscard.filter((card) => {
            return card.name !== move.name
        })
        setCardsInDiscard(filteredDiscardedCards)
        setCardsInHand([...cardsInHand, move])
    }

    const endTurn = () => {
        if (selectedMove) {
            discardMove(selectedMove)
            setSelectedMove(null)
            setGameState(GameStates.PICK_MOVE)
        }
    }

    return <Stack direction="column">
        <HeroStats />
        {gameState === GameStates.PICK_MOVE && <Stack direction="column">
            <Typography variant="h4">Select a Move</Typography>
            <MoveList moves={cardsInHand} selectMove={selectMove}/>
        </Stack>}
        {(gameState === GameStates.TAKE_TURN && selectedMove) && <Stack direction="column">
            <Stack direction="row">
                <Button variant="contained" onClick={endTurn}>End Turn</Button>
                <Button variant="contained" onClick={() => {setViewLocation(CardLocations.HAND)}}>Hand</Button>
                <Button variant="contained" onClick={() => {setViewLocation(CardLocations.DISCARD)}}>Discard</Button>
                <Button variant="contained" onClick={() => {setViewLocation(CardLocations.UPGRADES)}}>Upgrades</Button>
            </Stack>
            <MoveDisplay move={selectedMove} />
            {viewLocation === CardLocations.HAND && <Stack direction="column">
                <Typography>Hand</Typography>
                <MoveList moves={cardsInHand} discardMove={discardMove}/>
            </Stack>}
            {viewLocation === CardLocations.DISCARD && <Stack direction="column">
                <Typography>Discard</Typography>
                <MoveList moves={cardsInDiscard} addMoveToHand={addDiscardToHand}/>
            </Stack>}
            {viewLocation === CardLocations.UPGRADES && <Stack direction="column">
                <Typography>Upgrades</Typography>
                <MoveList moves={upgradeableCards} addMoveToHand={addUpgradeToHand}/>
            </Stack>}
        </Stack>}
    </Stack>
}