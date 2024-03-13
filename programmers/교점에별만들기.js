function solution(line) {
  let points = [];

  for (let i = 0; i < line.length; i++) {
    let [A, B, E] = line[i];
    for (let j = i + 1; j < line.length; j++) {
      let [C, D, F] = line[j];
      let tmp = A * D - B * C;

      if (tmp !== 0) {
        let x = B * F - E * D === 0 ? 0 : (B * F - E * D) / tmp;
        let y = E * C - A * F === 0 ? 0 : (E * C - A * F) / tmp;

        if (x === Math.floor(x) && y === Math.floor(y)) {
          points.push([x, y]);
        }
      }
    }
  }

  let maxX = -Infinity;
  let minX = Infinity;
  let maxY = -Infinity;
  let minY = Infinity;

  points.forEach((point) => {
    let [x, y] = point;

    maxX = Math.max(x, maxX);
    minX = Math.min(x, minX);
    maxY = Math.max(y, maxY);
    minY = Math.min(y, minY);
  });

  let col = Math.abs(maxX - minX);
  let row = Math.abs(maxY - minY);

  let board = Array.from({ length: row + 1 }, () =>
    new Array(col + 1).fill(".")
  );

  points.forEach((point) => {
    let [x, y] = point;
    board[maxY - y][x - minX] = "*";
  });

  return board.map((b) => b.join(""));
}
