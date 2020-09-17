/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function (input) {
  let left = [];
  let right = [];
  let product = [];
  left[0] = 1;

  for (let i=1; i<input.length; i++) {
    left[i] = input[i-1]*left[i-1];
  }
  right[input.length-1] = 1;
  for (let i=input.length-2; i>=0; i--) {
    right[i] = input[i+1]*right[i+1];
  }
  for (let i=0; i<input.length; i++) {
    product[i] = left[i]*right[i];
  }

  return product;
};

