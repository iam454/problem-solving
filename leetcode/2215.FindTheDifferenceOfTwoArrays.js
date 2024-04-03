/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let ans = [[], []];

  for (let key of set1) {
    if (!set2.has(key)) {
      ans[0].push(key);
    }
  }

  for (let key of set2) {
    if (!set1.has(key)) {
      ans[1].push(key);
    }
  }

  return ans;
};
