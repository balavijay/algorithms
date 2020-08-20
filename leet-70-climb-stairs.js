/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    const dp = [1, 1];
    let result = 0;

    for(let i=0; i<n; i++) {

        result = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = result;
       
    }

    return result;
};

console.log(climbStairs(5));