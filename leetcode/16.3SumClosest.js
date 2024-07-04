/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let N = nums.length;
  let ans = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < N - 2; i++) {
    let l = i + 1;
    let r = N - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum === target) {
        return sum;
      }
      if (sum > target) {
        r -= 1;
      } else if (sum < target) {
        l += 1;
      }
      if (Math.abs(ans - target) > Math.abs(sum - target)) {
        ans = sum;
      }
    }
  }

  return ans;
};
