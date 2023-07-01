import { Card, Stack, Typography } from "@mui/material";
import Move from "../types/move";

export interface MoveListProps {
    moves: Move[]
}
export default function MoveList({moves}: MoveListProps) {
    return <Stack direction="column">
        {moves.map(move => {
            return <Card>
                <Stack direction="column">
                <Typography variant="h5">{move.name}</Typography>
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
        })}
    </Stack>
}