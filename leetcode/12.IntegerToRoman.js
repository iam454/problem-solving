/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let dl = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  let cl = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let bl = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let al = ["", "M", "MM", "MMM"];

  let a = Math.floor(num / 1000);
  num = num % 1000;
  let b = Math.floor(num / 100);
  num = num % 100;
  let c = Math.floor(num / 10);
  num = num % 10;
  let d = num;

  return al[a] + bl[b] + cl[c] + dl[d];
};
