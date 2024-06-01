function solution(s) {
  let stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    let now = s[i];
    if (stack[stack.length - 1] === "(") {
      if (now === ")") {
        stack.pop();
      } else {
        stack.push(now);
      }
    } else {
      stack.push(now);
    }
  }

  return !stack.length;
}
