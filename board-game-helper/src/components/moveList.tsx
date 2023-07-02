import { Stack } from "@mui/material";
import Move from "../types/move";
import MoveDisplay from "./moveDisplay";

export interface MoveListProps {
    moves: Move[],
    selectMove: (move: Move) => void
}
export default function MoveList({moves, selectMove}: MoveListProps) {
    return <Stack direction="column">
        {moves.map(move => {
            return <MoveDisplay move={move} selectMove={selectMove}/>
        })}
    </Stack>
}