function solution(today, terms, privacies) {
  let answer = [];
  let obj = {};

  terms.forEach((term) => {
    let [type, time] = term.split(" ");
    obj[type] = Number(time) * 28;
  });

  let [ty, tm, td] = today.split(".");
  let t = Number(ty) * 12 * 28 + Number(tm) * 28 + Number(td);

  privacies.forEach((privacy, i) => {
    let [day, type] = privacy.split(" ");
    let [y, m, d] = day.split(".");
    let now = Number(y) * 12 * 28 + Number(m) * 28 + Number(d) + obj[type];

    if (t >= now) {
      answer.push(i + 1);
    }
  });

  return answer;
}
