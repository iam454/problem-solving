/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;

  if (x < 0) {
    ans = Number(x.toString().slice(1).split("").reverse().join("")) * -1;
  } else {
    ans = Number(x.toString().split("").reverse().join(""));
  }

  if (ans < -Math.pow(2, 31) || ans > Math.pow(2, 31) - 1) {
    return 0;
  }

  return ans;
};
