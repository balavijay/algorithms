function modifyArray(nums) {
    
    let newNums = nums.map((value)=> {
        if(value % 2) {
            value = value * 3;
        }
        else {
            value = value * 2;
        }
        return value;
    })

    return newNums;
    
}


const nums = [1,2,3,4,5];
console.log(modifyArray(nums));