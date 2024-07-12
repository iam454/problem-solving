const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, c] = input.shift().split(" ").map(Number);
const routers = [...input].map(Number).sort((a, b) => a - b);

let l = 1;
let r = routers[n - 1] - routers[0];

while (l <= r) {
  let mid = Math.floor((l + r) / 2);

  let cnt = 1;
  let prev = routers[0];

  routers.forEach((router) => {
    if (router - prev >= mid) {
      prev = router;
      cnt += 1;
    }
  });

  if (cnt >= c) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(r);
