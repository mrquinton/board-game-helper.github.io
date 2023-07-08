import { Button, Card, CardActions, CardContent, Icon, Stack, Typography } from "@mui/material";
import Move, { Item, MoveCardActions } from "../types/move";
import { InGameHero } from "../types/hero";
import { GiWalkingBoot, GiShield, GiSwordWound, GiExtraTime, GiSupersonicArrow, GiExpander} from 'react-icons/gi'

export const itemToIconMap = {
    [Item.attack]: (<GiSwordWound />),
    [Item.defense]: (<GiShield />),
    [Item.initiative]: (<GiExtraTime />),
    [Item.movement]: (<GiWalkingBoot />),
    [Item.radius]: (<GiExpander />),
    [Item.range]: (<GiSupersonicArrow />),
}
export interface MoveDisplayProps {
    move: Move,
    actions: MoveCardActions[],
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
        console.log(inGameHero)
    }
    const downgradeCard = (move: Move) => {
        inGameHero.moveCardFromHandToUpgrade(move)
        updateInGameHero()
    }
    const moveCardFromDiscardToUpgrade = (move: Move) => {
        inGameHero.moveCardFromDiscardToUpgrade(move)
        updateInGameHero()
    }
    const moveCardFromUpgradeToHand = (move: Move) => {
        inGameHero.addUpgradeToHand(move)
        updateInGameHero()
    }
    return <Card variant="outlined" style={{backgroundColor: move.color}}>
        <CardContent>
            <Stack direction="column">
                <Typography variant="h5">{move.name}</Typography>
                <Stack direction="row" spacing={1}>
                    <Typography variant="body1">{move.color} - {move.level}</Typography>
                    {(actions.includes(MoveCardActions.upgrade) && move.item) && <Typography>| Item: {itemToIconMap[move.item]}</Typography>}
                </Stack>
                <Typography variant="body1">{itemToIconMap[Item.initiative]} {move.initiative}</Typography>
                <Stack direction="row" spacing={1}>
                    {move.defense && <Typography variant="body1">{itemToIconMap[Item.defense]} {move.defense}</Typography>}
                    {move.movement && <Typography variant="body1">{itemToIconMap[Item.movement]} {move.movement}</Typography>}
                    {move.radius && <Typography variant="body1">{itemToIconMap[Item.radius]} {move.radius}</Typography>}
                    {move.range && <Typography variant="body1">{itemToIconMap[Item.range]} {move.range}</Typography>}
                    {move.attack && <Typography variant="body1">{itemToIconMap[Item.attack]} {move.attack}</Typography>}
                </Stack>
                <Typography variant="body1">Primary: {move.types}</Typography>
                <Typography variant="body1">{move.effect}</Typography>
            </Stack>
        </CardContent>
        <CardActions>
            <Stack direction="row">
                {actions.includes(MoveCardActions.select) && <Button onClick={() => {selectMove(move)}}>Select Move</Button>}
                {actions.includes(MoveCardActions.discard) && <Button onClick={() => {discardMove(move)}}>Discard Move</Button>}
                {(actions.includes(MoveCardActions.upgrade) && inGameHero.canLevel()) && <Button onClick={() => {upgradeCard(move)}}>Upgrade</Button>}
                {actions.includes(MoveCardActions.retrieve) && <Button onClick={() => {retrieveCard(move)}}>Add To Hand</Button>}
                {actions.includes(MoveCardActions.freeUpgrade) && <Button onClick={() => {moveCardFromUpgradeToHand(move)}}>Add To Hand</Button>}
                {actions.includes(MoveCardActions.downgrade) && <Button onClick={() => {downgradeCard(move)}}>Add To Upgrades</Button>}
                {actions.includes(MoveCardActions.discardToUpgrade) && <Button onClick={() => {moveCardFromDiscardToUpgrade(move)}}>Add To Upgrades</Button>}
            </Stack>
        </CardActions>
    </Card>
}