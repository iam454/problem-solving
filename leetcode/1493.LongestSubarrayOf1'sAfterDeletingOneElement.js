/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let l = 0;
  let r = 0;
  let del = 1;

  while (r < nums.length) {
    if (nums[r] === 0) {
      del -= 1;
    }
    if (del < 0) {
      if (nums[l] === 0) {
        del += 1;
      }
      l += 1;
    }
    r += 1;
  }

  return r - l - 1;
};
