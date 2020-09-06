/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var nums = {};
    let d = -1;
    for (let i=0; i<input.length; i++){
        if (input[i] in nums){
            nums[input[i]] += 1;
        }else{
            nums[input[i]] = 1;
        }
    }
    for (var key in nums){
        if (key == nums[key]){
            d = nums[key];
        }
    }
    return d;

};
