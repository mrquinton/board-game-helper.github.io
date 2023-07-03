import { Button, Card, Stack, Typography } from "@mui/material";
import Move from "../types/move";
import { MouseEventHandler } from "react";

export interface MoveDisplayProps {
    move: Move,
    selectMove?: (move: Move) => void,
    discardMove?: (move: Move) => void,
    addMoveToHand?: (move: Move) => void
}
export default function MoveDisplay({move, selectMove, discardMove, addMoveToHand}: MoveDisplayProps) {
    return <Card variant="outlined">
        <Stack direction="column">
        <Typography variant="h5">{move.name}</Typography>
        <Stack direction="row">
            {selectMove && <Button onClick={() => {selectMove(move)}}>Select Move</Button>}
            {discardMove && <Button onClick={() => {discardMove(move)}}>Discard Move</Button>}
            {addMoveToHand && <Button onClick={() => {addMoveToHand(move)}}>Add To Hand</Button>}
        </Stack>
        <Typography variant="body1">Initiative: {move.initiative}</Typography>
        <Typography variant="body1">Level: {move.level}</Typography>
        {move.defense && <Typography variant="body1">Defense: {move.defense}</Typography>}
        {move.movement && <Typography variant="body1">Movement: {move.movement}</Typography>}
        {move.radius && <Typography variant="body1">Radius: {move.radius}</Typography>}
        {move.range && <Typography variant="body1">Range: {move.range}</Typography>}
        {move.attack && <Typography variant="body1">Attack: {move.attack}</Typography>}
        <Typography variant="body1">{move.effect}</Typography>
        {move.attack && <Typography variant="body1">Item: {move.item}</Typography>}
        </Stack>
    </Card>
}