/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

function mySqrt(target: number): number {
  let left = 1
  let right = target
  let n = 0

  do {
    n++
    const middle = Math.floor((left + right) * 0.5)

    if (middle ** 2 <= target) {
      left = middle
    } else {
      right = middle
    }
  } while (left + 1 !== right)

  console.log(n)
  return left
}

function mySqrt1(x: number): number {
  let result = 0

  let r = 0
  let l = x
  let n = 0
  while (l >= r) {
    n++
    const m = r + Math.floor((l - r) / 2)
    const square = m * m
    if (square === x) {
      console.log(n)
      return m
    } else if (square < x && square > result) {
      result = m
    }
    if (square > x) {
      l = m - 1
    } else {
      r = m + 1
    }
  }

  console.log(n)
  return result
}

console.log('2 - ', mySqrt(4))
console.log('2 - ', mySqrt1(4))
console.log('---- ---- ---- ----')
console.log('2 - ', mySqrt(8))
console.log('2 - ', mySqrt1(8))
console.log('---- ---- ---- ----')
console.log('3 - ', mySqrt(9))
console.log('3 - ', mySqrt1(9))
console.log('---- ---- ---- ----')
console.log('3 - ', mySqrt(11))
console.log('3 - ', mySqrt1(11))
console.log('---- ---- ---- ----')
console.log('16 - ', mySqrt(256))
console.log('16 - ', mySqrt1(256))
console.log('---- ---- ---- ----')
console.log('16 - ', mySqrt(258))
console.log('16 - ', mySqrt1(258))
console.log('---- ---- ---- ----')
console.log('50 - ', mySqrt(2589))
console.log('50 - ', mySqrt1(2589))
