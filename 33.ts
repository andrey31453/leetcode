//
// search__1
//

const search__1 = (nums: number[], target: number): number => {
  return nums.findIndex((num) => num === target)
}

//
// search__2
//

const search__2 = (nums: number[], target: number): number => {
  let [left, middle, right] = [
    0,
    Math.round((0 + nums.length - 1) / 2),
    nums.length - 1,
  ]

  while (left <= right) {
    if (nums[middle] === target) return middle

    if (nums[left] < nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1
        middle = Math.round((left + right) / 2)
      } else {
        left = middle + 1
        middle = Math.round((left + right) / 2)
      }
    } else {
      if (nums[right] >= target && target > nums[middle]) {
        left = middle + 1
        middle = Math.round((left + right) / 2)
      } else {
        right = middle - 1
        middle = Math.round((left + right) / 2)
      }
    }
  }

  return -1
}

//
// search__3
//

interface I_Rotated_Sorted {
  get target_pos(): number
  not_end(): boolean
  is_target(): boolean
  target_side(): T_Side
  change_side(side: T_Side): void
}

type T_Side = 'left' | 'right'

class Rotated_Sorted implements I_Rotated_Sorted {
  #nums: number[]
  #target: number = 0
  #left: number = 0
  #middle: number = 0
  #right: number = 0

  constructor(nums: number[], target: number) {
    this.#nums = nums
    this.#target = target

    this.#left = 0
    this.#right = this.#nums.length - 1
    this.#set_middle()
  }

  get #left_value(): number {
    return this.#nums[this.#left]
  }

  get #middle_value(): number {
    return this.#nums[this.#middle]
  }

  get #right_value(): number {
    return this.#nums[this.#right]
  }

  get #is_left_sorted(): boolean {
    return this.#left_value < this.#middle_value
  }

  #set_middle(): void {
    this.#middle = Math.round((this.#left + this.#right) / 2)
  }

  #target_check_from_left(): boolean {
    return this.#left_value <= this.#target && this.#target < this.#middle_value
  }

  #target_check_from_right(): boolean {
    return (
      this.#right_value >= this.#target && this.#target > this.#middle_value
    )
  }

  #target_condition(left_sorted: boolean) {
    return left_sorted
      ? this.#target_check_from_left()
      : this.#target_check_from_right()
  }

  target_side(): T_Side {
    const left_sorted = this.#is_left_sorted
    const target_condition = this.#target_condition(left_sorted)
    return +left_sorted ^ +target_condition ? 'right' : 'left'
  }

  private change_to_left_side(): void {
    this.#right = this.#middle - 1
  }

  private change_to_right_side(): void {
    this.#left = this.#middle + 1
  }

  change_side(side: T_Side): void {
    this[`change_to_${side}_side`]()
    this.#set_middle()
  }

  not_end(): boolean {
    return this.#left <= this.#right
  }

  is_target(): boolean {
    return this.#middle_value === this.#target
  }

  get target_pos(): number {
    return this.#middle
  }
}

const search__3 = (nums: number[], target: number): number => {
  const rotated_sorted = new Rotated_Sorted(nums, target)

  while (rotated_sorted.not_end()) {
    if (rotated_sorted.is_target()) return rotated_sorted.target_pos

    const target_side = rotated_sorted.target_side()
    rotated_sorted.change_side(target_side)
  }

  return -1
}

//
// tests
//

console.log('---- ---- 1 ---- ----')
console.log('4:', search__1([4, 5, 6, 7, 0, 1, 2], 0))
console.log('-1:', search__1([4, 5, 6, 7, 0, 1, 2], 3))
console.log('-1:', search__1([1], 0))

console.log('---- ---- 2 ---- ----')
console.log('4:', search__2([4, 5, 6, 7, 0, 1, 2], 0))
console.log('-1:', search__2([4, 5, 6, 7, 0, 1, 2], 3))
console.log('-1:', search__2([1], 0))
console.log('0:', search__2([1], 1))
console.log('2:', search__2([1, 3, 5], 5))
console.log('0:', search__2([3, 1], 3))
console.log('3:', search__2([7, 8, 1, 2, 3, 4, 5, 6], 2))

console.log('---- ---- 3 ---- ----')
console.log('4:', search__3([4, 5, 6, 7, 0, 1, 2], 0))
console.log('-1:', search__3([4, 5, 6, 7, 0, 1, 2], 3))
console.log('-1:', search__3([1], 0))
console.log('0:', search__3([1], 1))
console.log('2:', search__3([1, 3, 5], 5))
console.log('0:', search__3([3, 1], 3))
console.log('3:', search__3([7, 8, 1, 2, 3, 4, 5, 6], 2))

//
// leetcode
//

function search(nums: number[], target: number): number {
  return search__3(nums, target)
}
