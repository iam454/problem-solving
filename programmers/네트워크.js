function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(0);

  function dfs(node) {
    visited[node] = 1;

    for (let i = 0; i < computers[node].length; i++) {
      if (computers[node][i] === 1 && visited[i] === 0) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}
