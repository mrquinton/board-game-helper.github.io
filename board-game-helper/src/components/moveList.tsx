import { Button, Stack } from "@mui/material";
import Move from "../types/move";
import MoveDisplay from "./moveDisplay";

export interface MoveListProps {
    moves: Move[],
    selectMove?: (move: Move) => void,
    discardMove?: (move: Move) => void,
    addMoveToHand?: (move: Move) => void
}
export default function MoveList({moves, selectMove, discardMove, addMoveToHand}: MoveListProps) {
    return <Stack direction="column">
        {moves.map(move => {
            return <Stack direction="column">
                <MoveDisplay move={move} selectMove={selectMove} discardMove={discardMove} addMoveToHand={addMoveToHand}/>
            </Stack>
        })}
    </Stack>
}