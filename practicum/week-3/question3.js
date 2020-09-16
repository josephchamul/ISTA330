/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function (input, k) {
  let first = -1;
  let second = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == 1) {
      second = i;
      if (first == -1) {
        first = i;
      } else {
        let len = second - first;
        first = i;
        if (len - 1 < k) {
          return false;
        }
      }
    }
  }

  return true;
};
