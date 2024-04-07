/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let ans = [];
  ans.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    let now = s[i];
    if (now === "*") {
      ans.pop();
    } else {
      ans.push(now);
    }
  }

  return ans.join("");
};
