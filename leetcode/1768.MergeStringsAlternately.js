/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let max = Math.max(word1.length, word2.length);
  let res = "";
  for (let i = 0; i < max; i++) {
    if (word1[i] !== undefined) {
      res += word1[i];
    }
    if (word2[i] !== undefined) {
      res += word2[i];
    }
  }

  return res;
};
