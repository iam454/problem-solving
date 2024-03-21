/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);

  let greatest = candies.map((candy) => {
    if (candy + extraCandies >= max) {
      return true;
    }
    return false;
  });

  return greatest;
};
