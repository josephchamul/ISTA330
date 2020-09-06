/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
    var triangle = [];
    for (var i = 0; i < n; i++) {
        triangle[i] = new Array(i+1);
        for (var x=0; x< i+1; x++) {            
            if (x === 0 || x === i) {
              triangle[i][x] = 1;
            } else {
              triangle[i][x] = triangle[i-1][x-1] + triangle[i-1][x];
            }
          }
    }
    return triangle;
};
