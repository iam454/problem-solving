function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);

  while (answer + 1 <= citations[answer]) {
    answer += 1;
  }

  return answer;
}
