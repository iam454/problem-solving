/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let s = 1;
  let e = Math.max(...piles);

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    let time = 0;
    piles.forEach((p) => {
      time += Math.ceil(p / mid);
    });
    if (time > h) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return s;
};
