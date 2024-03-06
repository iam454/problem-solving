function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  let camera = -30001;
  routes.forEach((route) => {
    let [enter, leave] = route;

    if (enter > camera) {
      answer += 1;
      camera = leave;
    }
  });

  return answer;
}
