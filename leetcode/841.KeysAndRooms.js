/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let N = rooms.length;
  let visited = new Array(N).fill(0);
  let q = [];
  q.push(rooms[0]);
  visited[0] = 1;

  while (q.length) {
    let keys = q.shift();

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (visited[key] === 0) {
        q.push(rooms[key]);
        visited[key] = 1;
      }
    }
  }

  return visited.every((i) => i === 1);
};
