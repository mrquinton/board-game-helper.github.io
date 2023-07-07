import { Button, Stack, Typography } from "@mui/material";
import Hero, { InGameHero } from "../types/hero";
import { useState } from "react";
import MoveList from "./moveList";
import Move, { CardActions } from "../types/move";
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
    const [viewLocation, setViewLocation] = useState(CardLocations.HAND)
    const [inGameHero, setInGameHero] = useState(new InGameHero(hero))

    const updateInGameHero = () => {
        setInGameHero(new InGameHero(inGameHero))
    }

    const endTurn = () => {
        inGameHero.endTurn()
        updateInGameHero()
    }

    return <Stack direction="column">
        <HeroStats inGameHero={inGameHero} updateInGameHero={updateInGameHero} />
        {inGameHero.gameState === GameStates.PICK_MOVE && <Stack direction="column">
            <Typography variant="h4">Select a Move</Typography>
            <MoveList moves={inGameHero.activeMoves} actions={[CardActions.select]} inGameHero={inGameHero} updateInGameHero={updateInGameHero}/>
        </Stack>}
        {(inGameHero.gameState === GameStates.TAKE_TURN && inGameHero.selectedMove) && <Stack direction="column">
            <Stack direction="row">
                <Button variant="contained" onClick={endTurn}>End Turn</Button>
                <Button variant="contained" onClick={() => {setViewLocation(CardLocations.HAND)}}>Hand</Button>
                <Button variant="contained" onClick={() => {setViewLocation(CardLocations.DISCARD)}}>Discard</Button>
                <Button variant="contained" onClick={() => {setViewLocation(CardLocations.UPGRADES)}}>Upgrades</Button>
            </Stack>
            <MoveDisplay move={inGameHero.selectedMove} actions={[]} inGameHero={inGameHero} updateInGameHero={updateInGameHero} />
            {viewLocation === CardLocations.HAND && <Stack direction="column">
                <Typography>Hand</Typography>
                <MoveList moves={inGameHero.activeMoves} actions={[CardActions.discard]} inGameHero={inGameHero} updateInGameHero={updateInGameHero}/>
            </Stack>}
            {viewLocation === CardLocations.DISCARD && <Stack direction="column">
                <Typography>Discard</Typography>
                <MoveList moves={inGameHero.discardedMoves} actions={[CardActions.retrieve]} inGameHero={inGameHero} updateInGameHero={updateInGameHero}/>
            </Stack>}
            {viewLocation === CardLocations.UPGRADES && <Stack direction="column">
                <Typography>Upgrades</Typography>
                <MoveList moves={inGameHero.upgradeableMoves} actions={[CardActions.upgrade]} inGameHero={inGameHero} updateInGameHero={updateInGameHero}/>
            </Stack>}
        </Stack>}
    </Stack>
}