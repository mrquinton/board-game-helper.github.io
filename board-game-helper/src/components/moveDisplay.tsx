import { Button, Card, Stack, Typography } from "@mui/material";
import Move, { CardActions } from "../types/move";
import { MouseEventHandler } from "react";
import { InGameHero } from "../types/hero";

export interface MoveDisplayProps {
    move: Move,
    actions: CardActions[],
    inGameHero: InGameHero,
    updateInGameHero: () => void
}
export default function MoveDisplay({move, actions, inGameHero, updateInGameHero}: MoveDisplayProps) {
    const selectMove = (move: Move) => {
        inGameHero.selectMove(move)
        updateInGameHero()
    }
    const discardMove = (move: Move) => {
        inGameHero.discardCard(move)
        updateInGameHero()
    }
    const retrieveCard = (move: Move) => {
        inGameHero.recoverCards([move])
        updateInGameHero()
    }
    const upgradeCard = (move: Move) => {
        inGameHero.upgradeCard(move)
        updateInGameHero()
    }
    return <Card variant="outlined">
        <Stack direction="column">
        <Typography variant="h5">{move.name}</Typography>
        <Typography variant="body1">{move.color} - {move.level}</Typography>
        <Stack direction="row">
            {actions.includes(CardActions.select) && <Button onClick={() => {selectMove(move)}}>Select Move</Button>}
            {actions.includes(CardActions.discard) && <Button onClick={() => {discardMove(move)}}>Discard Move</Button>}
            {actions.includes(CardActions.retrieve) && <Button onClick={() => {retrieveCard(move)}}>Add To Hand</Button>}
            {actions.includes(CardActions.upgrade) && <Button onClick={() => {upgradeCard(move)}}>Upgrade</Button>}
        </Stack>
        <Typography variant="body1">Initiative: {move.initiative}</Typography>
        <Typography variant="body1">Level: {move.level}</Typography>
        {move.defense && <Typography variant="body1">Defense: {move.defense}</Typography>}
        {move.movement && <Typography variant="body1">Movement: {move.movement}</Typography>}
        {move.radius && <Typography variant="body1">Radius: {move.radius}</Typography>}
        {move.range && <Typography variant="body1">Range: {move.range}</Typography>}
        {move.attack && <Typography variant="body1">Attack: {move.attack}</Typography>}
        <Typography variant="body1">Primary: {move.types}</Typography>
        <Typography variant="body1">{move.effect}</Typography>
        {move.attack && <Typography variant="body1">Item: {move.item}</Typography>}
        </Stack>
    </Card>
}