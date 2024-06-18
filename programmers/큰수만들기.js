function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let cur = number[i];

    while (k > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k -= 1;
    }

    stack.push(cur);
  }

  stack.splice(stack.length - k, k);

  return stack.join("");
}
