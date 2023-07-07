import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { InGameHero } from "../types/hero";

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
    return <Stack direction="column">
        <Stack direction="row">
            <Typography>Gold: {inGameHero.gold}</Typography>
            <Button onClick={addGold}>+</Button>
            <Button onClick={removeGold}>-</Button>
        </Stack>
        <Typography>Level: {inGameHero.level}</Typography>
        <Typography>Heart Value: {inGameHero.getHeartValue()}</Typography>
    </Stack>
}