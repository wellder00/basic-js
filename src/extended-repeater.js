const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { 
  repeatTimes = 1, 
  separator = '+', 
  addition = '', 
  additionRepeatTimes = 1, 
  additionSeparator = '|' 
}) {
  const additionStr = new Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator);
  const repeatedStr = new Array(repeatTimes).fill(`${str}${additionStr}`).join(separator);
  return repeatedStr;
}

module.exports = {
  repeater
};

module.exports = {
  repeater
};
