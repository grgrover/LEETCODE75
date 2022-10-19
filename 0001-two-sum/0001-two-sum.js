/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i=0; i<nums.length; i++) {
        var remainder = nums.slice(i+1, nums.length)
        for (var j=0; j<remainder.length; j++) {
            if (nums[i] + remainder[j] === target) {
                return [i, j+i+1]
            }
        }
    }
};