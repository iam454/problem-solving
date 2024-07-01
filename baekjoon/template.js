const fs = require("fs");

// 로컬 테스트용 입력 파일 읽기
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./baekjoon/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 입력값 처리
input.forEach((line) => {
  console.log(line);
});
