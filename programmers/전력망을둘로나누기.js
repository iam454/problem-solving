function solution(n, wires) {
  let answer = Infinity;
  let graph = Array.from({ length: n + 1 }, () => []);
  wires.forEach((wire) => {
    let [start, end] = wire;
    graph[start].push(end);
    graph[end].push(start);
  });

  function bfs(start, remove) {
    let cnt = 0;
    let visited = new Array(n + 1).fill(0);
    let q = [];
    q.push(start);
    visited[start] = 1;

    while (q.length) {
      let curNode = q.shift();

      for (let i = 0; i < graph[curNode].length; i++) {
        if (visited[graph[curNode][i]] === 0 && graph[curNode][i] !== remove) {
          q.push(graph[curNode][i]);
          visited[graph[curNode][i]] = 1;
        }
      }

      cnt += 1;
    }

    return cnt;
  }

  wires.forEach((wire) => {
    let [a, b] = wire;
    answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
  });

  return answer;
}
