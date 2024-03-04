function solution(n, wires) {
  let answer = Infinity;
  let graph = Array.from({ length: n + 1 }, () => []);

  wires.forEach((w) => {
    let [s, e] = w;
    graph[s].push(e);
    graph[e].push(s);
  });

  function bfs(start, remove) {
    let cnt = 0;
    let visited = new Array(n + 1).fill(false);
    let q = [];
    q.push(start);
    visited[start] = true;

    while (q.length) {
      let cur = q.shift();

      for (let i = 0; i < graph[cur].length; i++) {
        if (visited[graph[cur][i]] === false && graph[cur][i] !== remove) {
          visited[graph[cur][i]] = true;
          q.push(graph[cur][i]);
        }
      }

      cnt += 1;
    }

    return cnt;
  }

  wires.forEach((w) => {
    let [a, b] = w;
    answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
  });

  return answer;
}
