function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((p, i) => {
    return Math.ceil((100 - p) / speeds[i]);
  });

  let cnt = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (maxDay >= days[i]) {
      cnt += 1;
    } else {
      maxDay = days[i];
      answer.push(cnt);
      cnt = 1;
    }
  }

  answer.push(cnt);

  return answer;
}
