/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let minCost = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    minCost[i] = Math.min(minCost[i - 2] + cost[i], minCost[i - 1] + cost[i]);
  }

  return Math.min(minCost[minCost.length - 2], minCost[minCost.length - 1]);
};
