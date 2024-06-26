function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);

  let l = 1;
  let r = n * times[times.length - 1];

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let cnt = 0;

    for (let i = 0; i < times.length; i++) {
      cnt += Math.floor(mid / times[i]);
    }

    if (cnt >= n) {
      answer = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return answer;
}
