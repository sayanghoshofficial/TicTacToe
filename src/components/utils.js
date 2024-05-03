export const generateWinnerArr = (size) => {
    const winnerArr = [];
    // Horizontal and Vertical lines
    for (let i = 0; i < size; i++) {
        const horizontal = [];
        const vertical = [];
        for (let j = 0; j < size; j++) {
            horizontal.push(i * size + j);
            vertical.push(j * size + i);
        }
        winnerArr.push(horizontal, vertical);
    }
    // Diagonal lines
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < size; i++) {
        diagonal1.push(i * size + i);
        diagonal2.push(i * size + (size - 1 - i));
    }
    winnerArr.push(diagonal1, diagonal2);

    return winnerArr;
};