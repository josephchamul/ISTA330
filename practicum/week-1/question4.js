/*
You are given strings A and B.  
How many of the letters in B are also present in A?
The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.
 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var same=0;
    A = A.split("");
    B = B.split("");
    for(var i=0; i<B.length;i++){
        for(var x=0; x<A.length; x++){
            if (B[i] == A[x]){
                same+=1;
            }
        }
    }
    return same;
};
