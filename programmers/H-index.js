function solution(citations) {
  let cnt = 0;
  citations.sort((a, b) => b - a);

  while (cnt + 1 <= citations[cnt]) {
    cnt += 1;
  }

  return cnt;
}
