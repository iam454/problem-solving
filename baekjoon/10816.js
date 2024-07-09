const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const nArr = input[1].split(" ").map(Number);

const m = input[2];
const mArr = input[3].split(" ").map(Number);
const ans = new Array(m).fill(0);

let map = new Map();

nArr.forEach((i) => {
  map.set(i, (map.get(i) || 0) + 1);
});

for (let i = 0; i < m; i++) {
  ans[i] = map.get(mArr[i]) || 0;
}

console.log(ans.join(" "));
