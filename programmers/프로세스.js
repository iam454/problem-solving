function solution(priorities, location) {
  let answer = [];
  let l = priorities.map((p, i) => i);

  while (priorities.length) {
    let p = priorities.shift();
    let i = l.shift();

    let max = Math.max(...priorities);

    if (p < max) {
      priorities.push(p);
      l.push(i);
    } else {
      answer.push(i);
    }
  }

  return answer.indexOf(location) + 1;
}
