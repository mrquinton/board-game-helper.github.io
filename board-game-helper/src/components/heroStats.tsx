import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function HeroStats() {
    const [gold, setGold] = useState(0)
    const [level, setLevel] = useState(1)

    return <Stack direction="column">
        <Stack direction="row">
            <Typography>Gold: {gold}</Typography>
            <IconButton onClick={() => {setGold(gold + 1)}}>+</IconButton>
            <IconButton onClick={() => {setGold(gold - 1)}}>-</IconButton>
        </Stack>
        <Typography>Level: {level}</Typography>
        <Typography>Heart Value: {Math.floor(level / 3) + 1}</Typography>
    </Stack>
}