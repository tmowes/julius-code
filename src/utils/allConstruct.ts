type MemoProps = {
  [x: string]: string[][]
}

// BRUTE
// DURATION: undefined
// O(n^m) time
// O(m) space

// MEMO
// DURATION: 10.226ms
// O(n^m) time
// O(m) space

export const allConstruct = (
  target: string,
  wordsBank: string[],
  memo: MemoProps = {},
): string[][] | [] => {
  if (target in memo) return memo[target]
  if (target === '') return [[]]

  const allWays = []

  // eslint-disable-next-line no-restricted-syntax
  for (const word of wordsBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordsBank, memo)
      allWays.push(...suffixWays.map(way => [word, ...way]))
    }
  }
  memo[target] = allWays
  return allWays
}
