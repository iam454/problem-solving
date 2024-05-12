/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let dp = {
    0: 0,
    1: 1,
    2: 1,
  };

  for (let i = 0; i < n; i++) {
    dp[i + 3] = dp[i] + dp[i + 1] + dp[i + 2];
  }

  return dp[n];
};
