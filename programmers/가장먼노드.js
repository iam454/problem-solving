function solution(n, edge) {
  let graph = Array.from({ length: n + 1 }, () => []);
  edge.forEach((item) => {
    let [s, e] = item;
    graph[s].push(e);
    graph[e].push(s);
  });

  let visited = new Array(n + 1).fill(0);
  let q = [];
  q.push([graph[1], 1]);
  visited[1] = 1;

  while (q.length) {
    let [edges, cnt] = q.shift();

    for (let i = 0; i < edges.length; i++) {
      let next = edges[i];
      if (visited[next] === 0) {
        visited[next] = cnt + 1;
        q.push([graph[next], cnt + 1]);
      }
    }
  }

  let max = Math.max(...visited);

  return visited.filter((c) => c === max).length;
}
