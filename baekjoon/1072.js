const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [X, Y] = input[0].split(" ").map(Number);

if (X === Y) {
  console.log(-1);
  return;
}

const Z = Math.floor((100 * Y) / X);

let l = 0;
let r = 1_000_000_000;

let ans = -1;

while (l <= r) {
  const mid = Math.floor((l + r) / 2);
  const newZ = Math.floor((100 * (Y + mid)) / (X + mid));

  if (newZ > Z) {
    r = mid - 1;
    ans = mid;
  } else {
    l = mid + 1;
  }
}

console.log(ans);
