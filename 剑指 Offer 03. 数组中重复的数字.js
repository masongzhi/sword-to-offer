/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    var obj = {};
    var res;
    for (var i = 0;i <nums.length; i++) {
        if (!obj[nums[i]]) obj[nums[i]] = 1;
        else {
            res = nums[i];
            break
        }
    }
    return res;
};