function solution(begin, target, words) {
  let answer = 0;
  let N = words.length;
  let visited = new Array(N).fill(0);

  let q = [];
  q.push([begin, 0]);

  while (q.length) {
    let [w, cnt] = q.shift();

    if (w === target) {
      answer = cnt;
      return answer;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i] === 0 && isConnected(w, words[i])) {
        visited[i] = 1;
        q.push([words[i], cnt + 1]);
      }
    }
  }

  return answer;
}

function isConnected(w1, w2) {
  let cnt = 0;

  for (let i = 0; i < w2.length; i++) {
    if (w1[i] !== w2[i]) {
      cnt += 1;
    }
  }

  return cnt === 1 ? true : false;
}
