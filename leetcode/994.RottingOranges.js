/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let visited = Array.from({ length: m }, () => new Array(n).fill(0));
  let rotten = [];
  let fresh = 0;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        rotten.push([i, j, 0]);
      }
      if (grid[i][j] === 1) {
        fresh += 1;
      }
    }
  }

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (rotten.length) {
    let [cx, cy, min] = rotten.shift();
    ans = min;

    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (grid[nx][ny] === 1 && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          rotten.push([nx, ny, min + 1]);
          fresh -= 1;
        }
      }
    }
  }

  return fresh === 0 ? ans : -1;
};
