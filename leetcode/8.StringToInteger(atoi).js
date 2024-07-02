/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let ans = [];
  s = s.trim().split("");

  if (s[0] === "-") {
    ans.push("-");
    s.shift();
  } else if (s[0] === "+") {
    s.shift();
  }

  for (let i = 0; i < s.length; i++) {
    let regex = /^\d$/;
    if (regex.test(s[i])) {
      ans.push(s[i]);
    } else {
      break;
    }
  }

  ans = Number(ans.join(""));

  if (ans >= Math.pow(2, 31) - 1) {
    ans = Math.pow(2, 31) - 1;
  } else if (ans <= Math.pow(-2, 31)) {
    ans = Math.pow(-2, 31);
  }

  return isNaN(ans) ? 0 : ans;
};
