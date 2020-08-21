
let arr = [2, 7, 11, 15];
let target = 9;


var twoSum = function(nums, target) {

    const dataMap = new Map();
    let diff = 0;
    
    if(!nums.length){
        return [];
    }

    for(let i=0; i < nums.length; i++) {
        
        diff = target - nums[i];

        if(dataMap[nums[i]] != undefined) {

                return [ dataMap[nums[i]], i ];
        }

        dataMap[diff] = i;
    }

    return [];
    
};



console.log(twoSum (arr, target));