function solution(word) {
  let alpha = ["A", "E", "I", "O", "U"];
  let dic = [];

  function dfs(w, len) {
    if (len > 5) {
      return;
    }
    dic.push(w);
    for (let i = 0; i < 5; i++) {
      dfs(w + alpha[i], len + 1);
    }
  }

  dfs("", 0);

  return dic.indexOf(word);
}
