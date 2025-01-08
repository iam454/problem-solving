const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.shift();
input.shift();

const graph = {};

input.forEach((line) => {
  const [from, to] = line.split(" ").map(Number);

  if (!graph[from]) {
    graph[from] = [];
  }
  if (!graph[to]) {
    graph[to] = [];
  }

  graph[from].push(to);
  graph[to].push(from);
});

const visited = new Set();
visited.add(1);
dfs(1);
console.log(visited.size - 1);

function dfs(node) {
  if (!graph[node]) {
    return;
  }

  graph[node].forEach((next) => {
    if (!visited.has(next)) {
      visited.add(next);
      dfs(next);
    }
  });
}
