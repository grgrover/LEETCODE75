/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (var i = 0; i<s.length; i++) {
    var current = s[i]
    if (map[current]) {
      stack.push(map[current])
    } else if (current !== stack.pop()) {
      return false;
    }
  }
  return !stack.length;
}