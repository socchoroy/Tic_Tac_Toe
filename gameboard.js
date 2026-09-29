function GameBoard() {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const getBoard = () => board.map((row) => [...row]); // Return a copy of the board to prevent external mutation
  const placeMarker = (row, col, mark) => {
    if (row < 0 || row >= 3 || col < 0 || col >= 3) {
      return false;
    }

    if (!isPositionAvailable(row, col)) {
      return false;
    }

    if (mark !== "X" && mark !== "O") {
      return false;
    }

    board[row][col] = mark;
    return true;
  };
  const isFull = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === null) {
          return false;
        }
      }
    }
    return true;
  };
  const isPositionAvailable = (row, col) => {
    if (row < 0 || row >= 3 || col < 0 || col >= 3) {
      return false;
    }
    return board[row][col] === null;
  };

  const resetBoard = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        board[row][col] = null;
      }
    }
  };
  return {
    getBoard,
    placeMarker,
    isFull,
    isPositionAvailable,
    resetBoard,
  };
}

export { GameBoard };
