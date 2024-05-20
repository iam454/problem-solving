/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  let m = new Map();

  nums.forEach((num) => {
    m.set(num, (m.get(num) || 0) + 1);
  });

  let arr = [...m.entries()];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 1) {
      ans = arr[i][0];
    }
  }

  return ans;
};
