
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
    let maxNum = 0;
    for (let i=0; i<input.length; i++){
        for (let x=1; x<=input.length; x++){
            let nums = 0;
            var subarr = input.slice(i,x);
            for (let val=0; val<subarr.length; val++){
                nums += subarr[val];
            }
            if (nums > maxNum){
                maxNum = nums;
            }
        }
    }
    return maxNum;
    
};
