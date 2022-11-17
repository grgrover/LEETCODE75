/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var letters = {};
  if (magazine.length < ransomNote.length) {
    return false;
  }
  for (var i = 0; i < magazine.length; i++) {
    letters[magazine[i]] ? letters[magazine[i]]++ : letters[magazine[i]] = 1;
  }
  for (var j = 0; j < ransomNote.length; j++) {
    if (letters[ransomNote[j]] === undefined) {
      return false;
    } else {
      letters[ransomNote[j]]--
      if (letters[ransomNote[j]] < 0) {
        return false
      }
    }
  }
  return true;
};