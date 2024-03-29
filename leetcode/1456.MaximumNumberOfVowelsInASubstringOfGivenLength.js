/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowels = "aeiou";
  let tmp = 0;
  let i;
  for (i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      tmp += 1;
    }
  }
  let max = tmp;
  for (let x = i; x < s.length; x++) {
    if (vowels.includes(s[x])) {
      tmp += 1;
    }
    if (vowels.includes(s[x - i])) {
      tmp -= 1;
    }
    max = Math.max(max, tmp);
  }

  return max;
};
