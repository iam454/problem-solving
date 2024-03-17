function solution(maps) {
  let s = [];
  let l = [];
  let m1 = maps.map((m) => m.split(""));
  let m2 = maps.map((m) => m.split(""));
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        s.push([i, j]);
      }
      if (maps[i][j] === "L") {
        l.push([i, j]);
      }
    }
  }

  function bfs(start, map, end) {
    let [sx, sy] = start.shift();
    let q = [];
    q.push([sx, sy, 0]);
    map[sx][sy] = "X";

    while (q.length) {
      let [cx, cy, cnt] = q.shift();

      for (let i = 0; i < 4; i++) {
        let nx = cx + dx[i];
        let ny = cy + dy[i];

        if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length) {
          if (map[nx][ny] !== "X") {
            if (map[nx][ny] === end) {
              return cnt + 1;
            }
            q.push([nx, ny, cnt + 1]);
            map[nx][ny] = "X";
          }
        }
      }
    }
    return -1;
  }

  let sl = bfs(s, m1, "L");
  let le = bfs(l, m2, "E");

  if (sl === -1 || le === -1) {
    return -1;
  } else {
    return sl + le;
  }
}
