function solution(nums) {
  let types = new Set(nums).size;
  let choices = nums.length / 2;

  return types > choices ? choices : types;
}
