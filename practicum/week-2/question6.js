/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let mNums = input.length/2;
    var nums = {};
    for (let i=0; i<input.length; i++){
        if (input[i] in nums){
            nums[input[i]] += 1;
        }else{
            nums[input[i]] = 1;
        }
    }

    for (var key in nums){
        if (nums[key] > mNums){
            return parseInt(key);
        }
    }
    return -1;
};
