function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-z]*$/;

    
    /*
     * Do not remove the return statement
     */
    return re;
}

const re = regexVar();
console.log(!!"Dr. Max".match(re));
console.log(!!"Dr.Max".match(re));