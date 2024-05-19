/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = new Array(n + 1).fill(0);

  for (let i = 0; i < n + 1; i++) {
    let tmp = i.toString(2);
    let cnt = [...tmp].filter((t) => t === "1").length;
    arr[i] = cnt;
  }

  return arr;
};
