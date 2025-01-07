const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const res = [];
const memo = new Array(41).fill(0);

memo[0] = [1, 0];
memo[1] = [0, 1];
for (let i = 2; i < 41; i++) {
  memo[i] = [memo[i - 1][0] + memo[i - 2][0], memo[i - 1][1] + memo[i - 2][1]];
}

input.shift();
input.forEach((line) => {
  res.push(memo[Number(line)]);
});

console.log(res.map((line) => line.join(" ")).join("\n"));
