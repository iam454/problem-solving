function solution(numbers) {
  let answer = [];
  let nums = numbers.split("");
  let N = nums.length;
  let visited = new Array(N).fill(0);

  function dfs(str) {
    for (let i = 0; i < N; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        dfs(str + nums[i]);
        visited[i] = 0;
      }
    }
    answer.push(+str);
  }

  dfs("");

  let set = [...new Set(answer)];

  return set.filter((s) => isPrime(s)).length;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
