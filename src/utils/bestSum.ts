type MemoProps = {
  [x: number]: number[] | null
}

type ResultProps = number[] | null

// m = targetSum
// n = numbers length

// BRUTE
// DURATION: 22.676s
// O(n^m * m) time
// O(m^2) space

// MEMO
// DURATION: 5.238ms
// O(n * m^2) time
// O(m^2) space

export const bestSum = (
  targetSum: number,
  numbers: number[],
  memo: MemoProps = {},
): ResultProps => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  let shortestCombination: ResultProps = null

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    const remainder = targetSum - number
    const remainderResult = bestSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      const tempCombination = [...remainderResult, number]
      if (
        shortestCombination === null ||
        tempCombination.length < shortestCombination.length
      ) {
        shortestCombination = tempCombination
      }
    }
  }
  memo[targetSum] = shortestCombination
  return shortestCombination
}
