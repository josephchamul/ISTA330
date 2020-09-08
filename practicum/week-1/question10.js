/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5

*/

var maxMinusMin = function(n) {
    var nums = [];
    let min = 1000;
    let max = 0;
    while (n>0){
        nums.push(n%10);
        n = parseInt(n/10);
    }
    for (let i=0; i<nums.length; i++){
        if (nums[i] > max){
            max = nums[i]
        }
        if (nums[i] < min){
            min = nums[i]
        }
    }
    return max-min;
};
