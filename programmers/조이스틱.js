function solution(name) {
  let answer = 0;
  let N = name.length;
  let move = N - 1;

  for (let i = 0; i < N; i++) {
    let cur = name[i].charCodeAt();
    answer += Math.min(cur - 65, 91 - cur);

    let nextIndex = i + 1;
    while (nextIndex < N && name[nextIndex] === "A") {
      nextIndex += 1;
    }
    move = Math.min(move, i * 2 + N - nextIndex, i + (N - nextIndex) * 2);
  }

  return answer + move;
}
