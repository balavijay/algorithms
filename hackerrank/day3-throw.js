function isPositive(a) {

    try {
        if(a > 0) 
            return "YES";
        else if(a == 0 )
            throw "Zero Error";
        else 
            throw "Negative Error";

    } catch(e) {
        return e;
    }
   

}

console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));
console.log(isPositive('a'));
