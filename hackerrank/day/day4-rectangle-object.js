/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {

    const obj = {};
    
    obj.length = a;
    obj.width = b;
    obj.perimeter = (2*a) + (2*b);
    obj.area = a * b; 
    
    return obj;
}

console.log(Rectangle(4,5));