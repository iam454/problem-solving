/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let st = [];

  for (let i = 0; i < asteroids.length; i++) {
    let cur = asteroids[i];

    if (cur > 0) {
      st.push(cur);
    } else {
      while (
        st.length !== 0 &&
        st[st.length - 1] > 0 &&
        st[st.length - 1] < Math.abs(cur)
      ) {
        st.pop();
      }
      if (st.length === 0 || st[st.length - 1] < 0) {
        st.push(cur);
      } else if (st[st.length - 1] + cur === 0) {
        st.pop();
      }
    }
  }

  return st;
};
