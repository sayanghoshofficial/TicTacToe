import React from 'react'
import { BoardWpr, BoardComp, Box, MsgComp,Text,Button} from './Board.styled'

const initialBoard = Array(9).fill(null);
const Board = () => {
    return (
        <BoardWpr>
        <MsgComp>
        <Text>
        X Player Turn
        </Text>
        <Button>Reset</Button>
        </MsgComp>
            <BoardComp>
                {initialBoard.map((elem, idx) => (
                    <Box />
                ))}
            </BoardComp>
        </BoardWpr>
    )
}

export default Board