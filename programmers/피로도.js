function solution(k, dungeons) {
  let answer = -1;
  let N = dungeons.length;
  let visited = new Array(N).fill(0);

  function dfs(cnt, hp) {
    answer = Math.max(answer, cnt);
    for (let i = 0; i < dungeons.length; i++) {
      let [req, cost] = dungeons[i];
      if (hp >= req && visited[i] === 0) {
        visited[i] = 1;
        dfs(cnt + 1, hp - cost);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return answer;
}
