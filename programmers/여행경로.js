function solution(tickets) {
  let answer = [];
  let withIcn = tickets.filter((t) => t[0] === "ICN");
  let withoutIcn = tickets.filter((t) => t[0] !== "ICN");
  withIcn.sort();
  withoutIcn.sort();
  let sorted = [...withIcn, ...withoutIcn];
  let N = sorted.length;
  let visited = new Array(N).fill(0);

  function dfs(now, cnt, path) {
    if (cnt === N) {
      answer.push(path);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i] === 0 && now === sorted[i][0]) {
        visited[i] = 1;
        dfs(sorted[i][1], cnt + 1, `${path} ${sorted[i][1]}`);
        visited[i] = 0;
      }
    }
  }

  dfs("ICN", 0, "ICN");

  return answer[0].split(" ");
}
