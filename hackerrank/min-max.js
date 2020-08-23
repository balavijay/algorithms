function miniMaxSum(arr) {

    let largest = 1;
    let smallest = 1000000000;
    let min = 0;
    let max = 0;
    let elseMaxCount=0;
    let elseMinCount=0;
    
    arr.map((currentValue) => {
        largest = largest < currentValue ? currentValue : largest;
        smallest = smallest > currentValue ? currentValue : smallest;
    });
    
    
    arr.map((currentValue) => {
        if(currentValue != smallest) {
            max = max + currentValue;
           
        } else {
            elseMinCount++
        }
        if(currentValue != largest) {
            min = min + currentValue;
        }else{
            elseMaxCount++;
        }
    })
    
    if(elseMaxCount == 5 && elseMinCount == 5) {
        console.log(arr[0]*4, arr[0]*4);
    } else {
        console.log(min, max);
    }
    
    
    
    }

    miniMaxSum([1, 2, 3, 4, 5]);
    miniMaxSum([5, 5, 5, 5, 5]);
