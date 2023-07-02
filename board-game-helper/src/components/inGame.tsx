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

export interface InGameProps {
    hero: Hero
}
export default function InGame({hero}: InGameProps) {
    const [gameState, setGameState] = useState(GameStates.PICK_MOVE)
    const [selectedMove, setSelectedMove] = useState<Move | null>(null);

    const selectMove = (move: Move) => {
        setSelectedMove(move)
        setGameState(GameStates.TAKE_TURN)
    }

    return <Stack direction="column">
        <HeroStats />
        {gameState === GameStates.PICK_MOVE && <Stack direction="column">
            <Typography variant="h4">Select a Move</Typography>
            <MoveList moves={hero.activeMoves} selectMove={selectMove}/>
        </Stack>}
        {(gameState === GameStates.TAKE_TURN && selectedMove) && <Stack direction="column">
            <Button variant="contained">End Turn</Button>
            <MoveDisplay move={selectedMove}/>
        </Stack>}
    </Stack>
}