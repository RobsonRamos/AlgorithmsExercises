/*
    https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/
    Given a string, find the first non-repeating character in it. 
    For example, if the input string is “GeeksforGeeks”, then the output should be ‘f’ and 
    if the input string is “GeeksQuiz”, then the output should be ‘G’.
*/

function firstNonRepeatingCharacter(str){
    var obj = {};
    
    str.split('').forEach(item => {
        if(obj[item]){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    });
    
     
    
    for(let key in obj){
     
        if(obj[key] == 1){
            return key;
        }
    }
}

firstNonRepeatingCharacter('geeksforgeeks') === 'f';
firstNonRepeatingCharacter('GeeksQuiz') === 'G';