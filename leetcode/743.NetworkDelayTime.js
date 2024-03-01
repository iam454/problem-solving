/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let answer = -Infinity;
  let dist = new Array(n + 1).fill(Infinity);
  let graph = [];
  for (let i = 0; i < n + 1; i++) {
    graph[i] = [];
  }

  times.forEach((time) => {
    let [start, end, weight] = time;
    graph[start].push([end, weight]);
  });

  let q = [[k, 0]];
  dist[k] = 0;

  while (q.length) {
    let [curNode, curCost] = q.shift();

    for (let i = 0; i < graph[curNode].length; i++) {
      let [nextNode, cost] = graph[curNode][i];

      if (dist[nextNode] > dist[curNode] + cost) {
        dist[nextNode] = dist[curNode] + cost;
        q.push([nextNode, cost]);
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (dist[i] === Infinity) {
      return -1;
    }
    answer = Math.max(answer, dist[i]);
  }

  return answer;
};
