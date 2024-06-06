function solution(array, commands) {
  let answer = [];

  commands.forEach((command) => {
    let [i, j, k] = command;
    let cut = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(cut[k - 1]);
  });

  return answer;
}
