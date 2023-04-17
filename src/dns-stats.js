const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  let reverseArr = domains.map((el) => el.split('.').reverse());

  reverseArr.forEach((value) => {
    value.reduce((acc, v, i, arr) => {
      const key = acc ? `${acc}.${v}` : `.${v}`;
      if (obj[key]) {
        obj[key]++;
      } else {
        obj[key] = 1;
      }
      return key;
    }, '');
  });

  return obj;
}

getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);

module.exports = {
  getDNSStats,
};
