/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let ans = 0;
  let graph = {};
  let inverse = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
    inverse[i] = [];
  }
  connections.forEach((connection) => {
    let [start, end] = connection;
    graph[start].push(end);
    inverse[end].push(start);
  });

  let visited = new Array(n).fill(0);
  let q = [];
  q.push(0);
  visited[0] = 1;

  while (q.length) {
    let city = q.pop();
    visited[city] = 1;
    for (let i = 0; i < inverse[city].length; i++) {
      let node = inverse[city][i];
      if (visited[node] === 0) {
        q.push(node);
        visited[node] = 1;
      }
    }
    for (let i = 0; i < graph[city].length; i++) {
      let node = graph[city][i];
      if (visited[node] === 0) {
        q.push(node);
        visited[node] = 1;
        ans += 1;
      }
    }
  }

  return ans;
};
