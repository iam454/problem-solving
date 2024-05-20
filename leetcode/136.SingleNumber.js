/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;

  nums.forEach((num) => {
    ans ^= num;
  });

  return ans;
};
