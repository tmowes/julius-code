export const maxProfitDayTrade = (prices: number[]) => {
  let p = 0
  prices.forEach((price, index) => {
    const delta = price - prices[index - 1]
    if (delta > 0) {
      p += delta
    }
  })
  return p
}
