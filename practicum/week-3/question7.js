/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
    let sum = 0;
    for(let i=0; i<M[0].length; i++){
        if (i == 2){
            for(let x=1; x<M[0].length; x++){
                sum += M[x][i];
            }
        }
        sum += M[0][i];
    }
    return sum;
};
