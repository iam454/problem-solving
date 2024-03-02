function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let truck = truck_weights.shift();
  bridge.push(truck);
  bridge.shift();
  let bridgeSum = truck;
  let cnt = 1;

  while (bridgeSum > 0) {
    cnt += 1;
    let out = bridge.shift();
    bridgeSum -= out;

    if (truck_weights.length && bridgeSum + truck_weights[0] <= weight) {
      let nextTruck = truck_weights.shift();
      bridgeSum += nextTruck;
      bridge.push(nextTruck);
    } else {
      bridge.push(0);
    }
  }

  return cnt;
}
