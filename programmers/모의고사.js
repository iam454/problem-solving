function solution(answers) {
  let answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let u1 = 0;
  let u2 = 0;
  let u3 = 0;

  answers.forEach((answer, i) => {
    if (answer === a1[i % 5]) {
      u1 += 1;
    }
    if (answer === a2[i % 8]) {
      u2 += 1;
    }
    if (answer === a3[i % 10]) {
      u3 += 1;
    }
  });

  let max = Math.max(u1, u2, u3);

  if (max === u1) {
    answer.push(1);
  }
  if (max === u2) {
    answer.push(2);
  }
  if (max === u3) {
    answer.push(3);
  }

  return answer;
}
