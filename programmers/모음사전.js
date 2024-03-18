function solution(word) {
  let answer = 0;
  let alpha = ["A", "E", "I", "O", "U"];
  let dic = [];

  function dfs(w, cnt) {
    if (cnt > 5) {
      return;
    } else {
      dic.push(w);
    }
    for (let i = 0; i < alpha.length; i++) {
      dfs(w + alpha[i], cnt + 1);
    }
  }

  dfs("", 0);

  return dic.indexOf(word);
}
