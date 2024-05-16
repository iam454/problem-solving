/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  if (n <= 2) {
    return n;
  }
  let MOD = 10 ** 9 + 7;
  let dp = {
    0: 1,
    1: 1,
    2: 2,
  };
  for (let i = 3; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
  }

  return dp[n];
};
