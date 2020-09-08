/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let i = 1;
    let x = 0;
    let count = 0;
    var groups = [];
    while(i<=n){
        if (i>9){
            groups[x].push(i);
            x++;
        } else{
            groups.push([i]);
            x = 0;
        }
        i++;
    }
    for (let j=0; j<groups.length; j++){
        if (groups[j].length > 1){
            count++;
        }
    }
    return count;
};
