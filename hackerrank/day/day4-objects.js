
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {

    let count = 0;

    objects.map((obj) => {
        if(obj.x == obj.y) {
            count++;
        }
    })
    
    return count;
}

console.log(getCount([{x:1, y:1}, {x:1, y:0}, {x:0, y:0}]));