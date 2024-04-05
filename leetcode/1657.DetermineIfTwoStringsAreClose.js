/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let l1 = word1.length;
  let l2 = word2.length;

  if (l1 !== l2) {
    return false;
  }

  let alpha1 = new Array(26).fill(0);
  let alpha2 = new Array(26).fill(0);
  let s1 = new Set();
  let s2 = new Set();

  for (let i = 0; i < l1; i++) {
    let idx = word1.charCodeAt(i) - 97;
    alpha1[idx] += 1;
    s1.add(word1[i]);
  }
  for (let i = 0; i < l2; i++) {
    let idx = word2.charCodeAt(i) - 97;
    alpha2[idx] += 1;
    s2.add(word2[i]);
  }

  if (s1.size !== s2.size) {
    return false;
  }
  if (![...s1].every((s) => s2.has(s))) {
    return false;
  }

  alpha1.sort((a, b) => a - b);
  alpha2.sort((a, b) => a - b);

  return alpha1.every((al, i) => al === alpha2[i]);
};
