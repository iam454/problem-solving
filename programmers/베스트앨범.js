function solution(genres, plays) {
  let answer = [];
  let obj = {};
  let N = genres.length;

  for (let i = 0; i < N; i++) {
    if (obj[genres[i]]) {
      obj[genres[i]].total += plays[i];
    } else {
      obj[genres[i]] = {
        total: plays[i],
        list: [],
      };
    }
    obj[genres[i]].list.push([i, plays[i]]);
  }

  let sorted = Object.values(obj).sort((a, b) => b.total - a.total);

  sorted.forEach((i) => {
    i.list.sort((a, b) => b[1] - a[1]);
    answer.push(i.list[0][0]);
    if (i.list.length > 1) {
      answer.push(i.list[1][0]);
    }
  });

  return answer;
}
