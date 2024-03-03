function solution(numbers) {
  let answer = [];
  let list = numbers.split("");
  let N = list.length;
  let visited = new Array(N).fill(false);

  function dfs(n) {
    for (let i = 0; i < N; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        dfs(n + list[i]);
        visited[i] = false;
      }
    }
    answer.push(+n);
  }
  dfs("");

  let set = [...new Set(answer)];

  return set.filter((i) => isPrime(i)).length;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
