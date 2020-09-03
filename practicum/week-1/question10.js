/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5

*/

var maxMinusMin = function(n) {
        var nums = [];
        while (n>0){
            nums.push(n%10);
            n = parseInt(n/10);
        }
        return Math.max.apply(null, nums)-Math.min.apply(null, nums);
};
