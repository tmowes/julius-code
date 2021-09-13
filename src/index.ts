import { calcFib } from './utils/calcFibonacci'
import { gridTraveler } from './utils/gridTraveler'
import { howSum } from './utils/howSum'
import { canSum } from './utils/canSum'
import { bestSum } from './utils/bestSum'
import { canConstruct } from './utils/canConstruct'
import { countConstruct } from './utils/countConstruct'
import { allConstruct } from './utils/allConstruct'
import { convertPtBrDateToTime } from './utils/convertPtBrDateToTime'

// console.log(maxProfitSwingTrade([1, 3, 2, 8, 4, 9], 2))
// console.log(maxProfitSwingTrade([1, 3, 7, 5, 10, 3], 3))

// console.log(maxProfitDayTrade([7, 1, 5, 3, 6, 4]))
// console.log(maxProfitDayTrade([1, 2, 3, 4, 5]))
// console.log(maxProfitDayTrade([7, 6, 4, 3, 1]))

// console.time('DURATION')
// console.log(calcFib(6))
// console.log(calcFib(7))
// console.log(calcFib(8))
// console.log(calcFib(50))
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(gridTraveler(1, 1))
// console.log(gridTraveler(2, 3))
// console.log(gridTraveler(3, 2))
// console.log(gridTraveler(3, 3))
// console.log(gridTraveler(18, 18))
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(canSum(7, [2, 3]))
// console.log(canSum(7, [5, 3, 4, 7]))
// console.log(canSum(7, [2, 4]))
// console.log(canSum(8, [2, 3, 5]))
// console.log(canSum(300, [7, 14]))
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(howSum(7, [2, 3]))
// console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(7, [2, 4]))
// console.log(howSum(8, [2, 3, 5]))
// console.log(howSum(300, [7, 14]))
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(bestSum(7, [2, 3]))
// console.log(bestSum(7, [5, 3, 4, 7]))
// console.log(bestSum(7, [2, 4]))
// console.log(bestSum(8, [2, 3, 5]))
// console.log(bestSum(300, [7, 14]))
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
// console.log(
//   canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ]),
// ) // false
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'prupl'])) // 2
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
// console.log(
//   countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']),
// ) // 4
// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ]),
// ) // 0
// console.timeEnd('DURATION')

// console.time('DURATION')
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'prupl'])) // 2
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
// console.log(
//   allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ]),
// ) // 0
// console.timeEnd('DURATION')

console.time('DURATION')
console.log(convertPtBrDateToTime('05/07/2021 16:33:22')) // 2
console.timeEnd('DURATION')
