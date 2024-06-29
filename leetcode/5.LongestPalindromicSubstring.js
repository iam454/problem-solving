/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let l = i;
      let r = i + j;

      while (l >= 0 && r < s.length && s[l] === s[r]) {
        let len = r - l + 1;

        if (len >= max) {
          ans = s.substring(l, r + 1);
          max = len;
        }

        l -= 1;
        r += 1;
      }
    }
  }

  return ans;
};

console.log(longestPalindrome("babad"));
