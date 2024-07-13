const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.map(Number);

let l = 1;
let r = k;

while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    cnt += Math.min(Math.floor(mid / i), n);
  }

  if (cnt >= k) {
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}

console.log(l);
