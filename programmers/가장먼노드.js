function solution(n, edge) {
  let graph = Array.from({ length: n + 1 }, () => []);
  let visited = new Array(n + 1).fill(0);

  edge.forEach((e) => {
    let [start, end] = e;
    graph[start].push(end);
    graph[end].push(start);
  });

  let q = [];
  q.push([1, graph[1]]);
  visited[1] = 1;

  while (q.length) {
    let [cnt, edges] = q.shift();

    for (let i = 0; i < edges.length; i++) {
      if (visited[edges[i]] === 0) {
        visited[edges[i]] = cnt + 1;
        q.push([cnt + 1, graph[edges[i]]]);
      }
    }
  }

  let max = Math.max(...visited);

  return visited.filter((v) => v === max).length;
}
