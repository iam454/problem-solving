/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = [];
  let arr = new Array(s.length).fill("");
  let ls = s.toLowerCase();
  for (let i = 0; i < ls.length; i++) {
    if (
      ls[i] === "a" ||
      ls[i] === "e" ||
      ls[i] === "i" ||
      ls[i] === "o" ||
      ls[i] === "u"
    ) {
      vowels.push(s[i]);
    } else {
      arr[i] = s[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr[i] = vowels.pop();
    }
  }
  return arr.join("");
};
