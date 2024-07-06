/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let n = digits.length;
  let answer = [];
  if (n === 0) {
    return answer;
  }

  let texts = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];

  function dfs(cur, index) {
    if (index === n) {
      answer.push(cur);
      return;
    }
    let num = texts[digits[index]];
    for (let i = 0; i < num.length; i++) {
      dfs(cur + num[i], index + 1);
    }
  }

  dfs("", 0);

  return answer;
};
