//
// max_profit__1
//

const max_profit__1 = (prices: number[]): number => {
  let sale_price: number = 0
  let buy_price: number = prices[0]
  let last_buy_price: number

  for (let i = 1; i < prices.length; i++) {
    last_buy_price = prices[i - 1]
    buy_price = Math.min(buy_price, last_buy_price)
    const current_sale_price = prices[i] - buy_price
    sale_price = Math.max(sale_price, current_sale_price)
  }

  return sale_price
}

//
// max_profit__2
//

const max_profit__2 = (prices: number[]): number => {
  let sale_price: number = 0
  let buy_price: number = Number.MAX_VALUE

  for (let i = 0; i < prices.length; i++) {
    const current_price = prices[i]
    if (current_price < buy_price) {
      buy_price = current_price
      continue
    }

    const current_sale_price = current_price - buy_price
    sale_price = Math.max(sale_price, current_sale_price)
  }

  return sale_price
}

//
// tests
//

console.log('---- ---- 1 ---- ----')
console.log('5', max_profit__1([7, 1, 5, 3, 6, 4]))
console.log('5', max_profit__1([7, 1, 5, 3, 6, 0, 4]))
console.log('0', max_profit__1([7, 6, 4, 3, 1]))

console.log('---- ---- 2 ---- ----')
console.log('5', max_profit__2([7, 1, 5, 3, 6, 4]))
console.log('5', max_profit__2([7, 1, 5, 3, 6, 0, 4]))
console.log('0', max_profit__2([7, 6, 4, 3, 1]))

//
// leetcode
//

function maxProfit(prices: number[]): number {
  return max_profit__2(prices)
}
