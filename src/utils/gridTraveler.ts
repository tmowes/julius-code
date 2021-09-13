type MemoProps = {
  [x: string]: number
}

// m = cols
// n = rows

// BRUTE
// DURATION: undefined
// O(2^n + m) time
// O(n + m) space

// MEMO
// DURATION: 7.755ms
// O(n * m) time
// O(n + m) space

export const gridTraveler = (m: number, n: number, memo: MemoProps = {}) => {
  const key = `${m}|${n}`
  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}
