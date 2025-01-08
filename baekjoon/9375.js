const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.shift();

for (let i = 0; i < input.length; i++) {
  if (!isNaN(input[i])) {
    const n = Number(input[i]);
    const clothes = input.slice(i + 1, i + n + 1);
    solution(clothes);
    i += n;
  }
}

function solution(line) {
  const clothes = line.map((el) => el.split(" ")[1]);
  const clothesObj = clothes.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let answer = 1;
  for (let key in clothesObj) {
    answer *= clothesObj[key] + 1;
  }

  console.log(answer - 1);
}
