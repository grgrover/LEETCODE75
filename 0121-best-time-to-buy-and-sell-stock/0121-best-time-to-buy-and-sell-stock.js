/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var result = 0;
  var min = prices[0];
  for (var i=1; i<prices.length; i++) {
    min = Math.min(min, prices[i])
    result = Math.max(result, prices[i]-min)
  }
  return result;
}