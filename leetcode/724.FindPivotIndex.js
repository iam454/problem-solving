/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let lsum = 0;
  let rsum = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    rsum -= nums[i];
    if (lsum === rsum) {
      return i;
    }
    lsum += nums[i];
  }

  return -1;
};
