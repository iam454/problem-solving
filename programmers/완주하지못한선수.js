function solution(participant, completion) {
  let map = new Map();

  participant.forEach((p) => {
    map.set(p, (map.get(p) || 0) + 1);
  });

  completion.forEach((c) => {
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) {
      map.delete(c);
    }
  });

  let ans = [...map.keys()];

  return ans[0];
}
