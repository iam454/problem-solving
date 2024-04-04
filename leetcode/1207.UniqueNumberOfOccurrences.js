/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let cnt = 0;
  let map = new Map();
  arr.forEach((a) => {
    map.set(a, (map.get(a) || 0) + 1);
  });

  let set = new Set(map.values());

  return set.size === map.size;
};
