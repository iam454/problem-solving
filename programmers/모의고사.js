function solution(answers) {
  let answer = [];

  let user1 = [1, 2, 3, 4, 5];
  let user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let s1 = 0;
  let s2 = 0;
  let s3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === user1[i % user1.length]) {
      s1 += 1;
    }
    if (answers[i] === user2[i % user2.length]) {
      s2 += 1;
    }
    if (answers[i] === user3[i % user3.length]) {
      s3 += 1;
    }
  }

  let max = Math.max(s1, s2, s3);

  if (max === s1) {
    answer.push(1);
  }
  if (max === s2) {
    answer.push(2);
  }
  if (max === s3) {
    answer.push(3);
  }

  return answer;
}
