// buy and sell stock
// Approach
// Initial the maxProfit to track the maxProfit
// profit - > selling price - buying price
// small buying price + large selling price
// every possible buying day with every possible selling day 


// function BuySellStock(price) {
//   let maxProfit = 0;
//   for (let i = 0; i < price.length; i++) {
//     for (let j = i + 1; j < price.length; j++) {
//       const profit = price[j] - price[i];
//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit;
// }

// const price = [10, 6, 3, 2, 1, 4, 5];

// console.log(BuySellStock(price));

// time : O(n^2) - reason - there are two loop i and j (n * n)
// space : O(1) - reason - three variable is used in this code maxProfit,i and j it does'nt matter how much variable it still the O(1) space is taken

// version 2:
// function maxProfit(prices) {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     minPrice = Math.min(minPrice, prices[i]);

//     const profit = prices[i] - minPrice;

//     maxProfit = Math.max(maxProfit, profit);
//   }

//   return maxProfit;
// }

// const prices = [7, 1, 5, 3, 6, 4];

// console.log(maxProfit(prices));

// time : O(n) - now only we used one for loop and space:O(1): two variable it does'nt matter how much variable still it is
