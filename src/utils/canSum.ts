type MemoProps = {
  [x: number]: boolean
}

// BRUTE
// DURATION: 21.889s
// O(n^m) time
// O(m) space

// MEMO
// DURATION: 3.932ms
// O(n * m) time
// O(m) space

export const canSum = (
  targetSum: number,
  numbers: number[],
  memo: MemoProps = {},
): boolean => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    const remainder = targetSum - number
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }
  memo[targetSum] = false
  return false
}
