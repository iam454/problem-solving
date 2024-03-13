/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let m = new Map();

  strs.forEach((str) => {
    let ana = [...str].sort().join("");

    if (!m.has(ana)) {
      m.set(ana, []);
    }
    m.get(ana).push(str);
  });

  return [...m.values()];
};
