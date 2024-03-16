function solution(n) {
  let answer = 0;
  let now1 = n.toString(2);
  let cnt1 = [...now1].filter((n) => n === "1").length;
  let flag = true;

  while (flag) {
    n += 1;
    let now2 = n.toString(2);
    let cnt2 = [...now2].filter((n) => n === "1").length;

    if (cnt2 === cnt1) {
      answer = n;
      flag = false;
    }
  }

  return answer;
}
