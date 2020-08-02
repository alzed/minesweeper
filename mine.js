const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const createMineField = (row, column) => {
  let mineField = Array(row);
  let mineRow = Array(column).fill('');
  mineField.fill(mineRow);
  return mineField;
};

const placeMines = (row, column, mineField, mines) => {
  while (mines) {
    let x = getRandomInt(0, row);
    let y = getRandomInt(0, column);
    if (!mineField[x][y] === 'O') {
      mineField[x][y] = 'O';
      mines -= 1;
    }
  }
  return mineField;
};

const getMines = (x, y, mineField) => {
  around8 = [[x, y - 1], [x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1], [x, y + 1], [x - 1, y + 1]];
  nMines = 0;
  around8.forEach(pos => {
    if (mineField[pos[0]][pos[1]] === 'O') {
      nMines += 1;
    }
  });
  return nMines;
};

const placeNumbers = (row, column, mineField) => {
  while (row) {
    while (column) {
      mineField[row - 1][column - 1] = String(getMines(row - 1, column - 1, minefield));
      column -= 1;
    }
    row -= 1;
  }
  return mineField;
};

const mine = (row, column) => {
  row,
  column,
  createMineField (row, column) => {
    let mineField = Array(this.row);
    let mineRow = Array(this.column).fill('');
    mineField.fill(mineRow);
    return mineField;
  };
}

export {
  createMineField,
  placeMines,
  placeNumbers
};
