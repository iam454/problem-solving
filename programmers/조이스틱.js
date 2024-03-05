function solution(name) {
  let answer = 0;
  let N = name.length;
  let move = N - 1;

  for (let i = 0; i < N; i++) {
    let cur = name[i];
    answer += Math.min(cur.charCodeAt() - 65, 91 - cur.charCodeAt());

    let cnt = i + 1;

    while (cnt < N && name[cnt] === "A") {
      cnt += 1;
    }

    move = Math.min(move, i * 2 + N - cnt, i + (N - cnt) * 2);
  }

  return answer + move;
}
