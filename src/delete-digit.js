const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num =( n + '').split(''); 
  for (let i = 0; i < num.length - 1; i++) {    
    if (num[i] < num[i + 1]) {
        num.splice(i, 1);
      return parseInt(num.join(''));
    }
  }
  num.pop();
  return parseInt(num.join(''));
}
deleteDigit( 152 )
module.exports = {
  deleteDigit
};

