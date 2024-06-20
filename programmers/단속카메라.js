function solution(routes) {
  let answer = 0;
  let camera = -30001;
  routes.sort((a, b) => a[1] - b[1]);
  routes.forEach((route) => {
    let [enter, leave] = route;

    if (enter > camera) {
      camera = leave;
      answer += 1;
    }
  });

  return answer;
}
