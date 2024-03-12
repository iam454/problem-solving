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
      if (visited[keys[i]] === 0) {
        visited[keys[i]] = 1;
        q.push(rooms[keys[i]]);
      }
    }
  }

  return !visited.filter((v) => v === 0).length;
};
