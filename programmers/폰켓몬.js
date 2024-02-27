function solution(nums) {
  let choices = nums.length / 2;
  let set = new Set(nums).size;

  return set > choices ? choices : set;
}
