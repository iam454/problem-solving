function solution(k, dungeons) {
  let answer = -1;
  let N = dungeons.length;
  let visited = new Array(N).fill(0);

  function dfs(hp, cnt) {
    answer = Math.max(answer, cnt);
    for (let i = 0; i < N; i++) {
      let [need, cost] = dungeons[i];
      if (visited[i] === 0 && hp >= need) {
        visited[i] = 1;
        dfs(hp - cost, cnt + 1);
        visited[i] = 0;
      }
    }
  }

  dfs(k, 0);

  return answer;
}
