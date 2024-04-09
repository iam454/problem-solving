/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let st = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let tmp = "";
      while (st[st.length - 1] !== "[") {
        tmp = st.pop() + tmp;
      }
      st.pop();

      let num = "";
      while (st.length && !isNaN(st[st.length - 1])) {
        num = st.pop() + num;
      }

      st.push(tmp.repeat(Number(num)));
    } else {
      st.push(s[i]);
    }
  }

  return st.join("");
};
