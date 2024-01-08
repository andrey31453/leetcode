type sum_result = [number, number] | null

const two_sum = (nums: number[], target: number): sum_result => {
  const hash_map = new Map()
  let result: sum_result = null

  nums.forEach((num, idx) => {
    if (result) return

    const current_target = target - num
    if (hash_map.has(current_target)) {
      result = [hash_map.get(current_target), idx]
      return
    }

    hash_map.set(num, idx)
  })

  return result
}

/*
 * @lc app=leetcode id=1 lang=typescript
 */

function twoSum(nums: number[], target: number): sum_result {
  return two_sum(nums, target)
}
