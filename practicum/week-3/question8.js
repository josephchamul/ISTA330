/*
Given an array with n objects colored red, white or blue, 
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/

var sortColors = function (input) {
  let start = 0;
  let end = input.length - 1;
  let i = 0;
  let x = 0;
  while (i <= end) {
    if (input[i] == 0) {
      x = input[start];
      input[start] = input[i];
      input[i] = x;
      start++;
      i += 1;
    } else if (input[i] == 1) {
      i += 1;
    } else if (input[i] == 2) {
      x = input[end];
      input[end] = input[i];
      input[i] = x;
      end--;
    }
  }
  return input;
};
