/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with ratings (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. 
(soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
   let team = [];
   for (let i=0; i<input.length; i++){
       for(let j=0; j<input.length; j++){
           if (i != j){
               for(let k=0; k<input.length; k++){
                   if (i != j && i != k && j != k){
                       if (input[i] < input[j] && input[j] < input[k] && 0 <= i && i<j && j<k && k< input.length){
                           team.push([input[i], input[j], input[k]]);
                       }
                   }
               }
           }
       }
   }
   return team.length;
};
