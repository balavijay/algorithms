function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = RegExp('\\d+','g');
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }