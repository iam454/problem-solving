function solution(priorities, location) {
  let answer = [];
  let q = priorities.map((p, i) => i);

  while (priorities.length) {
    let process = priorities.shift();
    let idx = q.shift();

    if (process < Math.max(...priorities)) {
      priorities.push(process);
      q.push(idx);
    } else {
      answer.push(idx);
    }
  }

  return answer.indexOf(location) + 1;
}
