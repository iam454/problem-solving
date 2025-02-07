const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const fullStr = input[0];
const bombStr = input[1];

const stack = [];

for (let i = 0; i < fullStr.length; i++) {
  stack.push(fullStr[i]);
  let top = fullStr[i];
  if (top === bombStr[bombStr.length - 1]) {
    let last = stack.slice(-bombStr.length).join("");
    if (last === bombStr) {
      stack.splice(-bombStr.length);
    }
  }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
