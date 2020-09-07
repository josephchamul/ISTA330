/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    let med = 0;
    if (input.length%2 == 0){
        med = input.length/2;
        med += 0.5;
    }else{
        med = (input.length-1)/2;
    }
    return med;
};
