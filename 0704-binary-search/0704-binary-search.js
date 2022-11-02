/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var indexMin = 0;
  var indexMax = nums.length - 1;
  while (indexMax >= indexMin) {
    let middleIndex = Math.floor((indexMax+indexMin)/2);
    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    if (nums[middleIndex] < target) {
      indexMin = middleIndex + 1
    } else {
      indexMax = middleIndex -1
    }
  }
  return -1;
}