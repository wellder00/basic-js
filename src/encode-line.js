const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let arr = [];
  str.split('').forEach((el, indx, arr1) => {
    if (el === arr1[indx + 1]) count++;
    else {
      if (count === 0) arr.push(el);
      else {
        arr.push(`${count + 1}${el}`);
        count = 0;
      }
    }
  });
  return arr.join('');
}

encodeLine('aabbbc');
module.exports = {
  encodeLine,
};
