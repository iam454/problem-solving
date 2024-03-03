function solution(brown, yellow) {
  for (let h = 3; h < brown + yellow; h++) {
    let w = Math.floor((brown + yellow) / h);
    if ((w - 2) * (h - 2) === yellow) {
      return [w, h];
    }
  }
}
