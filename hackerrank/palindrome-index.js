// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    
    if(findPlaindrome(s)) {
        return -1;
    } else {
        let tmp;
        let flag;
       
        
        for(let i=0; i<s.length; i++) {
            tmp = [];
            for(let j=0; j<s.length; j++) {
                if(i !== j) {
                    tmp.push(s[j]);
                }
            }
            flag = findPlaindrome(tmp.join(''));
            if(flag) {
                return i;
            }
        }
    }


    function findPlaindrome(str){
        let reverseStr = str.split('').reverse().join('');
        if(reverseStr === str) {
            return true;
        }
    }

    return -1;

}

console.log(palindromeIndex("aaa"));