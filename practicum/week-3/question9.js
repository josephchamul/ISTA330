/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function (A) {
  let count = 0;
  let nums = [];
  for (let i = 0; i < A.length; i++) {
    for (let x = 0; x < A.length; x++) {
      if (x != i) {
        if (A[i] == A[x]) {
          A[x]++;
          count++;
        }
      }
    }
    if (nums.includes(A[i])) {
      nums[nums.indexOf(A[i])]++;
      count++;
    } else {
      nums.push(A[i]);
    }
  }
  return count;
};
