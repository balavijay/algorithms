function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    
    let re = {};
    re.test = function(s) {
        if(s[0].match(/[aeiou]/g)) {
             
            if( s[0]  == s[s.length-1] ) {
                return true;
            }
        }
         return  false;
    };
    /*
     * Do not remove the return statement
     */
    return re;
}

const re = regexVar();
console.log(re.test("abcde"));
console.log(re.test("abcda"));