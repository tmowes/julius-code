type MemoProps = {
  [x: number]: number
}

// n = number

// BRUTE
// DURATION: 3:01.810 (m:ss.mmm)
// O(2^n) time
// O(n) space

// MEMO
// DURATION: 3.893ms
// O(n) time
// O(n) space

export const calcFib = (n: number, memo: MemoProps = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = calcFib(n - 1, memo) + calcFib(n - 2, memo)
  return memo[n]
}
