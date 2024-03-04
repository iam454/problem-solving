function solution(word) {
  let answer = 0;
  let dic = [];
  let alpha = ["A", "E", "I", "O", "U"];

  function dfs(w, cnt) {
    if (cnt > 5) {
      return;
    }

    for (let i = 0; i < 5; i++) {
      dfs(w + alpha[i], cnt + 1);
    }

    dic.push(w);
  }

  dfs("", 0);
  dic.sort();

  return dic.indexOf(word);
}
