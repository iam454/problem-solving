/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let n = senate.length;
  let r = [];
  let d = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      r.push(i);
    } else {
      d.push(i);
    }
  }

  while (r.length > 0 && d.length > 0) {
    let rIdx = r.shift();
    let dIdx = d.shift();

    if (rIdx < dIdx) {
      r.push(rIdx + n);
    } else {
      d.push(dIdx + n);
    }
  }

  return r.length > 0 ? "Radiant" : "Dire";
};
