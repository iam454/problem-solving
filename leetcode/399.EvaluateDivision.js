/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let graph = {};
  for (let i = 0; i < equations.length; i++) {
    let [A, B] = equations[i];
    let value = values[i];

    if (!graph[A]) {
      graph[A] = {};
    }
    if (!graph[B]) {
      graph[B] = {};
    }

    graph[A][B] = value;
    graph[B][A] = 1 / value;
  }

  function getQuery(A, B, visited) {
    if (!(A in graph) || !(B in graph)) {
      return -1.0;
    }
    if (A === B) {
      return 1.0;
    }
    visited.add(A);
    let nodes = graph[A];

    for (let node in nodes) {
      if (!visited.has(node)) {
        let res = getQuery(node, B, visited);

        if (res !== -1.0) {
          return nodes[node] * res;
        }
      }
    }

    return -1.0;
  }

  let ans = [];

  for (let query of queries) {
    let [A, B] = query;
    let visited = new Set();
    let res = getQuery(A, B, visited);
    ans.push(res);
  }

  return ans;
};
