function solution(brown, yellow) {
  let answer = [];
  let total = brown + yellow;
  for (let i = 3; i < total; i++) {
    let j = total / i;
    if (j !== Math.floor(total / i) || i < j) {
      continue;
    }
    if ((i - 2) * (j - 2) === yellow) {
      answer.push(i);
      answer.push(j);
      break;
    }
  }
  return answer;
}
