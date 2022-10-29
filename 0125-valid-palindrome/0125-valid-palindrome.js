/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var sArray = s.split('');
  var letterArray = [];
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (var i=0; i<sArray.length; i++) {
    if (sArray[i].toUpperCase() !== sArray[i].toLowerCase() || nums.indexOf(sArray[i]) > -1 ) {
      letterArray.push(sArray[i].toLowerCase())
    }
  }
  var forward = letterArray.join('')
  var backward = letterArray.reverse().join('');
  return (forward === backward)
};