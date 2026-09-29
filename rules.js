const WINNING_LINES = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

const checkWinner = (board) => {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [[a, b], [c, d], [e, f]] = WINNING_LINES[i];
    if (
      board[a][b] &&
      board[a][b] === board[c][d] &&
      board[a][b] === board[e][f]
    ) {
      return board[a][b];
    }
  }
  return null;
};
const checkDraw = (board) => {
  if (checkWinner(board) !== null) return false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }
  return true;
};

export { checkWinner, checkDraw };
