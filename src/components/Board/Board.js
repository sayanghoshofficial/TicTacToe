import React, { useEffect, useState } from 'react';
import { BoardWpr, BoardComp, Box, MsgComp, Text, Button } from './Board.styled';



const Board = () => {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [nextPlayer, setNextPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const winnerArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const checkWinner = () => {
        for (let i = 0; i < winnerArr.length; i++) {
            const [a, b, c] = winnerArr[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                return;
            }
        }
        // Check for a tie
        if (board.every(square => square !== null)) {
            setWinner('Tie');
        }
    };

    useEffect(() => {
        checkWinner();
    }, [board]);

    const handleClick = (index) => {
        if (winner) {
            if (window.confirm(`${winner} is winner! Do you want to reset the game and play again?`)) {
                resetBoard();
            }
            setWinner(null);
            return;
        }
        if (board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = nextPlayer;
            setBoard(newBoard);
            setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
        }
    };

    const resetBoard = () => {
        setBoard(initialBoard);
        setNextPlayer('X');
    };

    return (
        <BoardWpr>
            <MsgComp>
            {winner ? (
                <>
                    {winner === 'Tie' ? (
                        <Text>It's a Tie!</Text>
                    ) : (
                        <Text>{winner} Wins!</Text>
                    )}
                    <Button onClick={resetBoard}>Play Again</Button>
                </>
            ) : (
                <>
                    <Text>{nextPlayer} Player Turn</Text>
                    <Button onClick={resetBoard}>Reset</Button>
                </>
            )}
            </MsgComp>
            <BoardComp>
                {board.map((elem, idx) => (
                    <Box key={idx} cursor={elem || winner ? true : false} onClick={() => handleClick(idx)}>{elem}</Box>
                ))}
            </BoardComp>
        </BoardWpr>
    );
};

export default Board;
