/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let N = isConnected.length;
  let ans = 0;
  let visited = new Array(N).fill(0);

  function dfs(node) {
    for (let i = 0; i < N; i++) {
      if (isConnected[node][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        dfs(i);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === 0) {
      ans += 1;
      dfs(i);
    }
  }

  return ans;
};
