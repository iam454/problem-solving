function solution(sizes) {
  let width = 0;
  let height = 0;

  sizes.forEach((size) => {
    let [w, h] = size;
    if (w >= h) {
      width = Math.max(width, w);
      height = Math.max(height, h);
    } else {
      width = Math.max(width, h);
      height = Math.max(height, w);
    }
  });

  return width * height;
}
