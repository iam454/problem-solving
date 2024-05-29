function solution(clothes) {
  let answer = 1;
  let map = new Map();

  clothes.forEach((cloth) => {
    let [item, type] = cloth;
    map.set(type, (map.get(type) || 0) + 1);
  });

  for (let [key, value] of map) {
    answer *= value + 1;
  }

  return answer - 1;
}
