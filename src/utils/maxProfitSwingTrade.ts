export const maxProfitSwingTrade = (prices: number[], fee: number): number => {
  let cash = 0
  let hold = -prices[0]
  prices.forEach(price => {
    cash = Math.max(cash, hold + price - fee)
    hold = Math.max(hold, cash - price)
  })
  return cash
}
