

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result;
    var map = [];
    for(var i=0; i<nums.length; i++){
        if(! map[nums[i]]){
            map[nums[i]] = true;
        }else{
            delete map[nums[i]];
        }
    }
    return parseInt(Object.keys(map)[0]);
};

var main = function(){
    var nums = [1,2,3,4,4,5,2,1,5];
    alert(singleNumber(nums));
}