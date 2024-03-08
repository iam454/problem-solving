function solution(numbers, target) {
  let answer = 0;
  let N = numbers.length;

  function dfs(n, cnt) {
    if (cnt === N) {
      if (n === target) {
        answer += 1;
      }
      return;
    }
    dfs(n + numbers[cnt], cnt + 1);
    dfs(n - numbers[cnt], cnt + 1);
  }

  dfs(0, 0);

  return answer;
}
