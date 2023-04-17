const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [   j-1 j  j+1
 * i-1 [1, 2, 1],
 * i   [2, 1, 1],
 * i+1 [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  matrix.map((val) => res.push([]));
  for (let i = 0; i < matrix.length; i++) {
    const el = matrix[i];
    for (let j = 0; j < el.length; j++) {
      let count = 0;
      const element = el[j];
      // проверка левого верхнего соседа
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) count++;
      // проверка среднего верхнего соседа
      if (i > 0 && matrix[i - 1][j]) count++;
      // проверка правого верхнего соседа
      if (i > 0 && j < el.length - 1 && matrix[i - 1][j + 1]) count++;
      // проверка левого  соседа
      if (j > 0 && matrix[i][j - 1]) count++;
      // проверка правого соседа
      if (j < el.length - 1 && matrix[i][j + 1]) count++;
      // проверка левого нижнего соседа
      if (i < matrix.length -1 && j > 0 && matrix[i + 1][j - 1]) count++;
      // проверка среднего нижнего соседа
      if (i < matrix.length -1 && matrix[i + 1][j]) count++;
      // проверка правого нижнего соседа
      if (i < matrix.length -1 && j < el.length - 1 && matrix[i + 1][j + 1]) count++;
      res[i].push(count);
      count = 0;
    }
  }
  return res
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);

module.exports = {
  minesweeper,
};
