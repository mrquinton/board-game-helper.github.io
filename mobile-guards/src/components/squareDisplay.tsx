import { Paper, colors, styled } from "@mui/material";
import Square from "../board/square";
import Zone from "../board/zones";

const zoneToColorMapping = {
    [Zone.BOTTOM_LANE]: colors.orange[100],
    [Zone.BOTTOM_SPAWN]: colors.amber[100],
    [Zone.TOP_LANE]: colors.orange[100],
    [Zone.TOP_SPAWN]: colors.amber[100],
    [Zone.LEFT_JUNGLE]: colors.green[100],
    [Zone.RIGHT_JUNGLE]: colors.green[100],
    [Zone.CENTER]: colors.blue[100],
    [Zone.OBSTACLE]: "white"
}

export interface SquareDisplayProps {
    square: Square
}

export default function SquareDisplay(props: SquareDisplayProps) {
    const style = {
        height: 80,
        width: 80,
        backgroundColor: zoneToColorMapping[props.square.zone]
    }
    return <Paper elevation={3} style={{...style, textAlign: "center"}}>
        {`(${props.square.x}, ${props.square.y})`} 
    </Paper>
}