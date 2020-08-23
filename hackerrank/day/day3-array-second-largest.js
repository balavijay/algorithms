'use strict';


/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function

    let largest;
    let secondLarget;
    let value;

    secondLarget = nums[0] < nums[1] ? nums[0] : nums[1];
    largest = nums[0] > nums[1] ? nums[0] : nums[1];

    for(let i=2; i<nums.length; i++) {
        value = nums[i];
       
        if( value > largest) {
            secondLarget = largest;
            largest = value;
        } else if (value != largest && value > secondLarget ) {
            secondLarget = value;
        }
    }

    return secondLarget;
    
}

console.log( getSecondLargest([2,3,6,6,5]));