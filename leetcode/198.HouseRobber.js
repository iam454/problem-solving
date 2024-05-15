/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let N = nums.length;

  if (N === 1) {
    return nums[0];
  }

  let dp = new Array(N).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[N - 1];
};
