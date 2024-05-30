function solution(genres, plays) {
  let answer = [];
  let obj = {};
  let N = genres.length;

  for (let i = 0; i < N; i++) {
    let g = genres[i];
    let p = plays[i];

    if (obj[g]) {
      obj[g].total += p;
    } else {
      obj[g] = {
        total: p,
        list: [],
      };
    }
    obj[g].list.push([i, p]);
  }

  let arr = Object.values(obj).sort((a, b) => b.total - a.total);
  arr.forEach((item) => {
    item.list.sort((a, b) => b[1] - a[1]);
    answer.push(item.list[0][0]);
    if (item.list.length > 1) {
      answer.push(item.list[1][0]);
    }
  });

  return answer;
}
