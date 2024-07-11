const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const trees = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let l = 0;
let r = trees[n - 1];
let ans = -1;

while (l <= r) {
  let mid = Math.floor((l + r) / 2);

  const sum = trees.reduce((acc, cur) => {
    if (cur > mid) {
      return acc + cur - mid;
    } else {
      return acc;
    }
  }, 0);

  if (sum >= m) {
    if (mid > ans) {
      ans = mid;
    }
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(ans);
