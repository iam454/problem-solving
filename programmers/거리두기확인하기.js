function solution(places) {
  let answer = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  function canSit(map, x, y) {
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (map[nx][ny] === "P") {
          return false;
        } else if (map[nx][ny] === "O") {
          for (let j = 0; j < 4; j++) {
            let nnx = nx + dx[j];
            let nny = ny + dy[j];

            if (nnx >= 0 && nnx < 5 && nny >= 0 && nny < 5) {
              if (nnx !== x || nny !== y) {
                if (map[nnx][nny] === "P") {
                  return false;
                }
              }
            }
          }
        }
      }
    }
    return true;
  }

  places.forEach((place) => {
    let isSafe = 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          if (!canSit(place, i, j)) {
            isSafe = 0;
            break;
          }
        }
      }
      if (!isSafe) {
        break;
      }
    }
    answer.push(isSafe);
  });

  return answer;
}
