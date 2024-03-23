/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let a = Infinity;
  let b = Infinity;
  let c = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (a >= nums[i]) {
      a = nums[i];
    } else if (b >= nums[i]) {
      b = nums[i];
    } else if (c >= nums[i]) {
      return true;
    }
  }
  return false;
};
