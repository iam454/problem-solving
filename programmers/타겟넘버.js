function solution(numbers, target) {
  let answer = 0;
  let N = numbers.length;

  function dfs(sum, cnt) {
    if (cnt === N) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    dfs(sum + numbers[cnt], cnt + 1);
    dfs(sum - numbers[cnt], cnt + 1);
  }

  dfs(0, 0);

  return answer;
}
