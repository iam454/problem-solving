function solution(sizes) {
  let width = 0;
  let height = 0;

  while (sizes.length) {
    let size = sizes.shift();
    let w = Math.max(...size);
    let h = Math.min(...size);

    width = Math.max(width, w);
    height = Math.max(height, h);
  }

  return width * height;
}
