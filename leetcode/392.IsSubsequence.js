/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let cnt = 0;
  let st = "";
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[cnt]) {
      st += s[cnt];
      cnt += 1;
    }
  }

  return st === s;
};
