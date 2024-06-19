function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;

  while (l <= r) {
    let sum = people[l] + people[r];
    if (sum > limit) {
      r -= 1;
      answer += 1;
    } else {
      l += 1;
      r -= 1;
      answer += 1;
    }
  }

  return answer;
}
