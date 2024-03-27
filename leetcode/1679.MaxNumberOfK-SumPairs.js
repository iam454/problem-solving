/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let cnt = 0;
  let map = new Map();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k - nums[i]) {
      if (map.get(nums[i]) >= 2) {
        map.set(nums[i], map.get(nums[i]) - 2);
        cnt += 1;
      }
    } else {
      if (map.get(k - nums[i]) && map.get(nums[i])) {
        map.set(k - nums[i], map.get(k - nums[i]) - 1);
        map.set(nums[i], map.get(nums[i]) - 1);
        cnt += 1;
      }
    }
  }

  return cnt;
};
