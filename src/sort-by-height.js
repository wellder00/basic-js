const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with filter, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filter = arr.filter(x => x !== -1).sort((a, b) => a - b);
  return arr.reduce((result, x) => {
    if (x === -1) {
      result.push(x);
    } else {
      result.push(filter.shift());
    }
    return result;
  }, []);
}

sortByHeight( [-1, 150, 160, 170, -1, -1, 180, 190] ) 
module.exports = {
  sortByHeight
};
