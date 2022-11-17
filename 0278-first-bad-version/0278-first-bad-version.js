/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  // /**
  //  * @param {integer} n Total versions
  //  * @return {integer} The first bad version
  //  */
  return function(n) {
    var index = Math.ceil(n/2)
    var topIndex = n;
    var bottomIndex = 1;
    while(topIndex >= bottomIndex) {
        var badVersion = true;
      if (isBadVersion(index)) {
        topIndex = index-1
        index = Math.ceil((topIndex+bottomIndex)/2)
      } else {
        bottomIndex = index+1
        index = Math.ceil((topIndex+bottomIndex)/2)
      }
    }
      return index;
  };
};