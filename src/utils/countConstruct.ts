type MemoProps = {
  [x: string]: number
}

// BRUTE
// DURATION: undefined
// O(n^m * m) time
// O(m^2) space

// MEMO
// DURATION: 4.668ms
// O(n * m^2) time
// O(m^2) space

export const countConstruct = (
  target: string,
  wordsBank: string[],
  memo: MemoProps = {},
): number => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalWays = 0

  // eslint-disable-next-line no-restricted-syntax
  for (const word of wordsBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const numberWays = countConstruct(suffix, wordsBank, memo)
      totalWays += numberWays
    }
  }
  memo[target] = totalWays
  return totalWays
}
