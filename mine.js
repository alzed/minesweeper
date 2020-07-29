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
