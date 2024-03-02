function solution(array, commands) {
  let answer = [];

  while (commands.length) {
    let [i, j, k] = commands.shift();
    let newArr = array.slice(i - 1, j);
    newArr.sort((a, b) => a - b);
    answer.push(newArr[k - 1]);
  }

  return answer;
}
