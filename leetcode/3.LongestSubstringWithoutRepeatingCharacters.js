/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let char = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
    while (char.has(s[r])) {
      char.delete(s[l]);
      l++;
    }
    char.add(s[r]);
    max = Math.max(max, r - l + 1);
  }

  return max;
};
