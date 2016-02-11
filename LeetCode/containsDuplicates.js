/**
 * Return true if the array given in parameter
 * has duplicate element. false if all elements are unique
 * @param nums
 */

var containsDuplicate= function(nums){
    var tab = {};
    for(var i=0; i<nums.length; i++){
        if(tab[nums[i]] != null){
            return true;
        }else{
            tab[nums[i]] = false;
        }
    }
    return false;
}

var main = function(){
    var nums = [1,2,3,4,5];
    alert(containsDuplicate(nums));
}