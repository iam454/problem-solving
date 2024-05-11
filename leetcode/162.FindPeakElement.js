/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let prev = nums[mid - 1] || -Infinity;
    let next = nums[mid + 1] || -Infinity;

    if (prev < nums[mid] && nums[mid] > next) {
      return mid;
    } else if (next > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};
