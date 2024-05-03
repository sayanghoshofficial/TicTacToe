import React, { useEffect, useState } from 'react';
import { BoardWpr, BoardComp, Box, MsgComp, Text, Button } from './Board.styled';
import { generateWinnerArr } from '../utils';



const Board = ({ size = 3 }) => {
    // const [initialBoard, setInitialBoard] = (Array(size * size).fill(null))
    const [board, setBoard] = useState([...Array(size * size).fill(null)]);
    const [nextPlayer, setNextPlayer] = useState('X');
    const [winnerArr, setWinnerArr] = useState([])
    const [winner, setWinner] = useState(null);

    // console.log(initialBoard)

    useEffect(() => {
        // setInitialBoard(Array(size * size).fill(null))
        setBoard(Array(size * size).fill(null))
        setWinnerArr(generateWinnerArr(size))
        setWinner(null)
        console.log(size, 'jgkjgk')
    }, [size])

    const checkWinner = () => {
        for (let i = 0; i < winnerArr.length; i++) {
            const line = winnerArr[i];
            const symbols = line.map((index) => board[index]);
            // Check if all symbols are the same and not null
            if (symbols.every((symbol) => symbol && symbol === symbols[0])) {
                setWinner(symbols[0]);
                return;
            }
        }
        // Check for a tie
        if (board.every((square) => square !== null)) {
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
        setBoard(Array(size * size).fill(null));
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
            <BoardComp size={size}>
                {board.map((elem, idx) => (
                    <Box key={idx} cursor={elem || winner ? true : false} onClick={() => handleClick(idx)}>{elem}</Box>
                ))}
            </BoardComp>
        </BoardWpr>
    );
};

export default Board;
