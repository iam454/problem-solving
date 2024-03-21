/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ");
  let res = arr.filter((a) => a !== "");
  return res.reverse().join(" ");
};
