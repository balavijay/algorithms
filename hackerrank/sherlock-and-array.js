function balancedSums(arr) {


    let sum = 0;
    let currentValue=0;

    sum = arr.reduce((sum ,value) => {
        sum = sum + value;
        return sum;
    });


    for(let i=0; i<arr.length; i++){
         if(currentValue == sum - arr[i] - currentValue) {
             return "YES";
         }
         currentValue = currentValue + arr[i];
    }
    
    return "NO";
}

console.log(balancedSums([1, 2, 3]));
console.log(balancedSums([1, 2, 3, 3]));
console.log(balancedSums([1, 1, 4, 1, 1]));
console.log(balancedSums([2, 0, 0, 0]));
console.log(balancedSums([0, 0, 2, 0 ]));