function solution(n, lost, reserve) {
  let have = new Array(n).fill(1);

  lost.forEach((l) => (have[l - 1] -= 1));
  reserve.forEach((l) => (have[l - 1] += 1));

  for (let i = 0; i < n; i++) {
    if (have[i] === 0) {
      if (have[i - 1] >= 2) {
        have[i] += 1;
        have[i - 1] -= 1;
      } else if (have[i + 1] >= 2) {
        have[i] += 1;
        have[i + 1] -= 1;
      }
    }
  }

  return have.filter((h) => h >= 1).length;
}
