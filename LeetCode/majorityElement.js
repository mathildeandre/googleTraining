

var majorityElement = function(nums){
    var tabs = {};
    var numberOfElements = nums.length;
    for(var i=0; i<numberOfElements; i++){
        if(tabs[nums[i]] == null){
            tabs[nums[i]] = 1;
        }else{
            tabs[nums[i]] =  tabs[nums[i]]+1;
        }
        if(tabs[nums[i]] > numberOfElements/2){
            return nums[i];
        }
    }
    return null;
};

var main = function(){
    var nums = [1,2,2,2,5];
    alert(majorityElement(nums));
}