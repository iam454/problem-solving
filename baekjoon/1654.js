const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [k, n] = input.shift().split(" ").map(Number);
const cables = [...input].map(Number).sort((a, b) => a - b);

let l = 1;
let r = cables[k - 1];

while (l <= r) {
  let mid = Math.floor((l + r) / 2);

  const sum = cables.reduce((acc, cur) => {
    return acc + Math.floor(cur / mid);
  }, 0);

  if (sum >= n) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(r);
