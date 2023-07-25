import { Stack } from "@mui/material";
import { Board } from "../board/board";
import SquareDisplay from "./squareDisplay";

export interface BoardDisplayProps {
    board: Board
}

export default function BoardDisplay(props: BoardDisplayProps) {
    const boardArray = props.board.toArray()

    return <Stack direction="column">
        {boardArray.map(squareRows => {
            return <Stack direction="row">
                {squareRows.map(square => {
                    return <SquareDisplay square={square} />
                })}
            </Stack>
        })}
    </Stack>
}