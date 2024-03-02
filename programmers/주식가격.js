function solution(prices) {
  let N = prices.length;
  let answer = new Array(N).fill(0);
  let stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && stack[stack.length - 1][1] > prices[i]) {
      let [pDay, pPrice] = stack.pop();
      answer[pDay] = i - pDay;
    }
    stack.push([i, prices[i]]);
  }

  for (let i = 0; i < stack.length; i++) {
    let [day, price] = stack[i];
    answer[day] = stack[stack.length - 1][0] - day;
  }

  return answer;
}
