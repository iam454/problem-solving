/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let N = temperatures.length;
  let answer = new Array(N).fill(0);
  let stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && stack[stack.length - 1][1] < temperatures[i]) {
      let [pDay, pTemp] = stack.pop();
      answer[pDay] = i - pDay;
    }
    stack.push([i, temperatures[i]]);
  }

  return answer;
};
