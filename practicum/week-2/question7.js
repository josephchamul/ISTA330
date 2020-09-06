/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var matrix = [];
    let i = 0;
    while (i<M[0].length){
        var row = [];
        let x = 0;
        while(x<M.length){
            row.push(M[x][i])
            x++;
        }
        matrix.push(row);
        i++;
    }
    return matrix;
};
