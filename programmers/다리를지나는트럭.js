function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let truck = truck_weights.shift();
  bridge.push(truck);
  bridge.shift();
  let sum = truck;
  let cnt = 1;

  while (sum > 0) {
    cnt += 1;
    let out = bridge.shift();
    sum -= out;

    if (sum + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      bridge.push(truck);
      sum += truck;
    } else {
      bridge.push(0);
    }
  }

  return cnt;
}
