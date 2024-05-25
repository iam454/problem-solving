function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);

  let s = 1;
  let e = n * times[times.length - 1];

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    let cnt = 0;

    for (let time of times) {
      cnt += Math.floor(mid / time);
    }

    if (cnt >= n) {
      answer = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return answer;
}
