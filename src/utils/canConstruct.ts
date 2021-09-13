type MemoProps = {
  [x: string]: boolean
}

// BRUTE
// DURATION: undefined
// O(n^m * m) time
// O(m^2) space

// MEMO
// DURATION: 3.874ms
// O(n * m^2) time
// O(m^2) space

export const canConstruct = (
  target: string,
  wordsBank: string[],
  memo: MemoProps = {},
): boolean => {
  if (target in memo) return memo[target]
  if (target === '') return true
  // eslint-disable-next-line no-restricted-syntax
  for (const word of wordsBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordsBank, memo)) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}
