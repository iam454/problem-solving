/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let max = Math.max(str1.length, str2.length);
  let l, s;
  if (max === str1.length) {
    l = str1;
    s = str2;
  } else {
    l = str2;
    s = str1;
  }

  function getGCD(n1, n2) {
    while (n2 > 0) {
      let r = n1 % n2;
      n1 = n2;
      n2 = r;
    }
    return n1;
  }

  let gcd = getGCD(l.length, s.length);
  let str = str1.slice(0, gcd);

  return str;
};
