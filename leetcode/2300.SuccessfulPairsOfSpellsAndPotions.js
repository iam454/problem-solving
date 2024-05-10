/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  let ans = [];
  potions.sort((a, b) => a - b);

  spells.forEach((spell) => {
    let cnt = 0;
    let l = 0;
    let r = potions.length - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (spell * potions[mid] >= success) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    cnt = potions.length - l;

    ans.push(cnt);
  });

  return ans;
};
