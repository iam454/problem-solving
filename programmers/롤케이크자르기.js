function solution(topping) {
  var answer = 0;
  let c = new Map();
  let d = new Map();

  topping.forEach((t) => {
    c.set(t, (c.get(t) || 0) + 1);
  });

  topping.forEach((t) => {
    if (c.get(t) === 1) {
      c.delete(t);
    } else {
      c.set(t, c.get(t) - 1);
    }

    d.set(t, (d.get(t) || 0) + 1);

    if (c.size === d.size) {
      answer += 1;
    }
  });

  return answer;
}
