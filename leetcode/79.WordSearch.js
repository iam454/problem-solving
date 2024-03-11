/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let M = board[0].length;
  let N = board.length;

  function dfs(r, c, cnt) {
    if (cnt === word.length) {
      return true;
    }
    if (r >= N || r < 0 || c >= M || c < 0) {
      return false;
    }
    if (board[r][c] !== word[cnt]) {
      return false;
    }

    board[r][c] = 1;
    if (
      dfs(r + 1, c, cnt + 1) ||
      dfs(r - 1, c, cnt + 1) ||
      dfs(r, c + 1, cnt + 1) ||
      dfs(r, c - 1, cnt + 1)
    ) {
      return true;
    }
    board[r][c] = word[cnt];
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
};
