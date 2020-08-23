/*
 * Create the function factorial here
 */
function factorial(n) {
    if(n>1) 
        return factorial(n-1) * n;
    else 
        return 1;
}

console.log(factorial(5));