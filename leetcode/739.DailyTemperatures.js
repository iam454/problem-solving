/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let n = temperatures.length;
  let ans = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
      let [temp, day] = stack.pop();
      ans[day] = i - day;
    }
    stack.push([temperatures[i], i]);
  }

  return ans;
};
