const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const nArr = input[1].split(" ").map(Number);
const mArr = input[3].split(" ").map(Number);
const ans = [];

nArr.sort((a, b) => a - b);
mArr.forEach((i) => {
  let l = 0;
  let r = nArr.length - 1;
  let flag = false;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (nArr[mid] === i) {
      flag = true;
      break;
    }

    if (nArr[mid] > i) {
      r = mid - 1;
    } else if (nArr[mid] < i) {
      l = mid + 1;
    }
  }

  if (flag) {
    ans.push("1");
  } else {
    ans.push("0");
  }
});

console.log(ans.join("\n"));
