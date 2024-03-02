function solution(s) {
  let answer = true;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length) {
      if (stack[stack.length - 1] === "(" && s[i] === ")") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
}
