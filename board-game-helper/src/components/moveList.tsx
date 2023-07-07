import { Button, Stack } from "@mui/material";
import Move, { MoveCardActions } from "../types/move";
import MoveDisplay from "./moveDisplay";
import { InGameHero } from "../types/hero";

export interface MoveListProps {
    moves: Move[]
    actions: MoveCardActions[]
    inGameHero: InGameHero,
    updateInGameHero: () => void
}
export default function MoveList({moves, actions, inGameHero, updateInGameHero}: MoveListProps) {
    return <Stack direction="column" spacing={1}>
        {moves.map(move => {
            return <MoveDisplay key={move.name} move={move} actions={actions} inGameHero={inGameHero} updateInGameHero={updateInGameHero}/>
        })}
    </Stack>
}