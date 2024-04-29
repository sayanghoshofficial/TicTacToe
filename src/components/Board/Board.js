import React from 'react'
import { BoardWpr, BoardComp, Box } from './Board.styled'

const initialBoard = Array(9).fill(null);
const Board = () => {
    return (
        <BoardWpr>
            <BoardComp>
                {initialBoard.map((elem, idx) => (
                    <Box />
                ))}
            </BoardComp>
        </BoardWpr>
    )
}

export default Board