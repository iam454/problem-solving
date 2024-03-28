/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let i;

  for (i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;

  for (let x = i; x < nums.length; x++) {
    sum += nums[x];
    sum -= nums[x - i];
    max = Math.max(max, sum);
  }

  return (max / k).toFixed(5);
};
