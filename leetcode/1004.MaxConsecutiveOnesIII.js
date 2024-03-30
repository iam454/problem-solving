/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] === 0) {
      k -= 1;
    }
    if (k < 0) {
      if (nums[l] === 0) {
        k += 1;
      }
      l += 1;
    }
    r += 1;
  }

  return r - l;
};
