/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = romans[s[i]];
    let next = romans[s[i + 1]];

    if (cur < next) {
      ans += next - cur;
      i += 1;
    } else {
      ans += cur;
    }
  }

  return ans;
};
