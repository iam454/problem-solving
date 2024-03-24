/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  let j = 0;

  while (j < chars.length) {
    let cnt = 0;
    let cur = chars[j];

    while (j < chars.length && chars[j] === cur) {
      j += 1;
      cnt += 1;
    }
    chars[i++] = cur;

    if (cnt > 1) {
      for (let digit of cnt.toString()) {
        chars[i++] = digit;
      }
    }
  }

  return i;
};
