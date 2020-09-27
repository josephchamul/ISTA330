
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
     let dupl = {};
     for (let i=0; i<input.length; i++){
         if (input[i] in dupl){
             dupl[input[i]] += 1;
         }else{
             dupl[input[i]] = 1;
         }
     }
     let out = [];
     for (let key in dupl){
         if (dupl[key] == 2){
             out.push(parseInt(key));
         }
     }
     return out;
    
};
