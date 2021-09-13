type MemoProps = {
  [x: number]: number[] | null
}

// m = targetSum
// n = numbers length

// BRUTE
// DURATION: 22.953s
// O(n^m * m) time
// O(m) space

// MEMO
// DURATION: 5.310ms
// O(n * m^2) time
// O(m^2) space

export const howSum = (
  targetSum: number,
  numbers: number[],
  memo: MemoProps = {},
): number[] | null => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    const remainder = targetSum - number
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, number]
      return [...remainderResult, number]
    }
  }
  memo[targetSum] = null
  return null
}
