/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    let word = '';
    let nS = '';
    for (let i=0; i<s.length; i++){
        if (s[i] != ' '){
            nS += s[i];
        }
    }
    for (let i=s.length-1; i>=0; i--){
        if (s[i] != ' '){
            word += s[i];
        }
    }
    if (word.toLowerCase() == nS.toLowerCase()){
        return true;
    }
    return false;
};
