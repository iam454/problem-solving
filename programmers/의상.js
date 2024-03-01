function solution(clothes) {
  let answer = 1;
  let types = {};

  clothes.forEach((cloth) => {
    let [item, type] = cloth;

    if (types[type]) {
      types[type].push(item);
    } else {
      types[type] = [item];
    }
  });

  for (let item of Object.values(types)) {
    answer *= item.length + 1;
  }

  return answer - 1;
}
