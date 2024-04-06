/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let ans = 0;
  let rows = new Map();

  for (let i = 0; i < grid.length; i++) {
    let r = JSON.stringify(grid[i]);
    rows.set(r, (rows.get(r) || 0) + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    let col = JSON.stringify(grid.map((g) => g[i]));
    ans += rows.get(col) || 0;
  }

  return ans;
};
