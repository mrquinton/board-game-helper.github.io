import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { InGameHero } from "../types/hero";
import { Item } from "../types/move";
import { itemToIconMap } from "./moveDisplay";

export interface HeroStatsProps {
    inGameHero: InGameHero,
    updateInGameHero: () => void
}

export default function HeroStats({inGameHero, updateInGameHero}: HeroStatsProps) {
    const addGold = () => {
        inGameHero.addGold(1)
        updateInGameHero()
    }
    const removeGold = () => {
        inGameHero.removeGold(1)
        updateInGameHero()
    }
    return <Stack direction="row" spacing={1}>
        <Stack direction="column">
            <Typography>Round: {inGameHero.round} Turn: {inGameHero.turn}</Typography>
            <Typography>Level: {inGameHero.level}</Typography>
            <Typography>Heart Value: {inGameHero.getHeartValue()}</Typography>
            <Stack direction="row" spacing={1}>
                <Typography>Gold: {inGameHero.gold}</Typography>
                <Button size="small" variant="outlined" onClick={addGold}>+</Button>
                <Button size="small" variant="outlined" onClick={removeGold}>-</Button>
            </Stack>
        </Stack>
        <Stack direction="column">
            <Typography>{itemToIconMap[Item.attack]}: {inGameHero.getItemBonuses()[Item.attack]}</Typography>
            <Typography>{itemToIconMap[Item.defense]}: {inGameHero.getItemBonuses()[Item.defense]}</Typography>
            <Typography>{itemToIconMap[Item.initiative]}: {inGameHero.getItemBonuses()[Item.initiative]}</Typography>
        </Stack>
        <Stack direction="column">
            <Typography>{itemToIconMap[Item.movement]}: {inGameHero.getItemBonuses()[Item.movement]}</Typography>
            <Typography>{itemToIconMap[Item.radius]}: {inGameHero.getItemBonuses()[Item.radius]}</Typography>
            <Typography>{itemToIconMap[Item.range]}: {inGameHero.getItemBonuses()[Item.range]}</Typography>
        </Stack>
    </Stack>
}