const is_palindrome = (x: number): boolean => {
  const input_string = x.toString()
  const input_array = input_string.split('')

  for (let i = 0, j = input_array.length - 1; i < j; i++, j--) {
    if (input_array[i] !== input_array[j]) return false
  }

  return true
}

console.log(is_palindrome(121))
console.log(is_palindrome(-121))
console.log(is_palindrome(10))

/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

function isPalindrome(x: number): boolean {
  return is_palindrome(x)
}
