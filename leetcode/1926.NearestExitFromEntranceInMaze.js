/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  let m = maze.length;
  let n = maze[0].length;
  let visited = Array.from({ length: m }, () => new Array(n).fill(0));

  let ans = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  let q = [];
  let ex = entrance[0];
  let ey = entrance[1];
  q.push([ex, ey, 0]);
  visited[ex][ey] = 1;

  while (q.length) {
    let [cx, cy, level] = q.shift();

    if (cx === 0 || cx === m - 1 || cy === 0 || cy === n - 1) {
      if (cx !== ex || cy !== ey) {
        ans.push(level);
      }
    }

    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (maze[nx][ny] === "." && visited[nx][ny] === 0) {
          q.push([nx, ny, level + 1]);
          visited[nx][ny] = 1;
        }
      }
    }
  }

  if (ans.length) {
    return Math.min(...ans);
  } else {
    return -1;
  }
};
