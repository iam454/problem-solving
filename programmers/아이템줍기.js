function solution(rectangle, characterX, characterY, itemX, itemY) {
  let board = [];
  for (let i = 0; i < 103; i++) {
    board[i] = new Array(103).fill(0);
  }

  let dr = rectangle.map((r) => r.map((i) => i * 2));
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  dr.forEach((item) => {
    let [x1, y1, x2, y2] = item;

    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
          }
        } else {
          board[i][j] = 2;
        }
      }
    }
  });

  let q = [];
  q.push([characterX, characterY, 0]);
  board[characterX][characterY] = -1;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (q.length) {
    let [x, y, cnt] = q.shift();

    if (x === itemX && y === itemY) {
      return cnt / 2;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (board[nx][ny] === 1) {
        q.push([nx, ny, cnt + 1]);
        board[nx][ny] = -1;
      }
    }
  }

  return 0;
}
