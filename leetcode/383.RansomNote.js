/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < magazine.length; i++) {
    ransomNote = ransomNote.replace(magazine[i], "");
  }
  if (ransomNote.length) {
    return false;
  }
  return true;
};
