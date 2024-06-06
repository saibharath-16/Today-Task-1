// let one_rs=1;
// let two_rs=2;
// let five_rs=5;

// let target="4";

// let len=target.length;
// // console.log(len);

// if(len===1){

//     let val1=10/len;
//     console.log(val1);
// }



function minCoins(coins, target) {
    const dp = Array(target + 1).fill(Infinity);
    dp[0] = 0; 
    for (let coin of coins) {
        for (let i = coin; i <= target; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return  dp[target] === Infinity ? -1 : dp[target];
}


const coins = [1, 2, 5];
const target = 11;
const result = minCoins(coins, target);
console.log(`Minimum number of coins needed: ${result}`);