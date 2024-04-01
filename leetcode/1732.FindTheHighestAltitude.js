/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitudes = [0];
  gain.forEach((g, i) => {
    let now = g + altitudes[i];
    altitudes.push(now);
  });
  return Math.max(...altitudes);
};
