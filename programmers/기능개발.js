function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  let cnt = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (maxDay >= days[i]) {
      cnt += 1;
    } else {
      answer.push(cnt);
      maxDay = days[i];
      cnt = 1;
    }
  }

  answer.push(cnt);

  return answer;
}
