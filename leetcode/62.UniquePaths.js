/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let board = [];

  for (let i = 0; i < m; i++) {
    board[i] = new Array(n).fill(1);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      board[i][j] = board[i - 1][j] + board[i][j - 1];
    }
  }

  return board[m - 1][n - 1];
};
