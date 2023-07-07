import { Button, Stack } from "@mui/material";
import Move, { CardActions } from "../types/move";
import MoveDisplay from "./moveDisplay";
import { InGameHero } from "../types/hero";

export interface MoveListProps {
    moves: Move[]
    actions: CardActions[]
    inGameHero: InGameHero,
    updateInGameHero: () => void
}
export default function MoveList({moves, actions, inGameHero, updateInGameHero}: MoveListProps) {
    return <Stack direction="column">
        {moves.map(move => {
            return <Stack direction="column">
                <MoveDisplay move={move} actions={actions} inGameHero={inGameHero} updateInGameHero={updateInGameHero}/>
            </Stack>
        })}
    </Stack>
}