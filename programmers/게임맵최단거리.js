function solution(maps) {
  let answer = -1;
  let n = maps.length;
  let m = maps[0].length;
  let visited = [];
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(0);
  }

  let q = [];
  q.push([0, 0, 1]);
  visited[0][0] = 1;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (q.length) {
    let [x, y, cnt] = q.shift();

    if (x === n - 1 && y === m - 1) {
      answer = cnt;
      return answer;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (visited[nx][ny] === 0 && maps[nx][ny] === 1) {
          q.push([nx, ny, cnt + 1]);
          visited[nx][ny] = 1;
        }
      }
    }
  }

  return answer;
}
