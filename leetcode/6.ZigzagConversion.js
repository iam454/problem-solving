/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let ans = new Array(numRows).fill().map(() => []);

  let idx = 0;
  let next = 1;

  for (let i = 0; i < s.length; i++) {
    ans[idx].push(s[i]);
    if (idx === 0) {
      next = 1;
    } else if (idx === numRows - 1) {
      next = -1;
    }
    idx += next;
  }

  return ans.map((i) => i.join("")).join("");
};
