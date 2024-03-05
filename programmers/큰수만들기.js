function solution(number, k) {
  let answer = "";
  let st = [];

  for (let i = 0; i < number.length; i++) {
    let cur = number[i];

    while (k > 0 && st[st.length - 1] < cur) {
      st.pop();
      k -= 1;
    }

    st.push(cur);
  }

  st.splice(st.length - k, k);

  return st.join("");
}
