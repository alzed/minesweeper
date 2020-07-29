const createMineField = (row, column) => {
  let mineField = Array(row);
  let mineRow = Array(column).fill('');
  mineField.fill(mineRow);
  return mineField;
};
