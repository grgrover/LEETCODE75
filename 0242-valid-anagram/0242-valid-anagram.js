/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var sObj = {};
  var result = true
  for (var i=0; i<s.length; i++) {
    sObj[s[i]] ? sObj[s[i]]++ : sObj[s[i]] = 1;
  }
  for (var i=0; i<t.length; i++) {
    if (!sObj[t[i]]) {
      result = false;
    } else {
      sObj[t[i]]--
      if (sObj[t[i]] === 0) {
        delete sObj[t[i]]
      }
    }
  }
  if (Object.keys(sObj).length > 0) {
    result = false;
  }
  return result;

};