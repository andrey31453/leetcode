/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

function singleNumber(nums: number[]): number | boolean {
  return nums.reduce((answ, num) => (answ ^= num), 0)
}
