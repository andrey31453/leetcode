//
// array_strings_are_equal
//

const array_strings_are_equal = (word1: string[], word2: string[]): boolean => {
  return word1.join('') === word2.join('')
}

//
// tests
//

console.log(array_strings_are_equal(['ab', 'c'], ['a', 'bc']))
console.log(array_strings_are_equal(['a', 'cb'], ['ab', 'c']))
console.log(array_strings_are_equal(['abc', 'd', 'defg'], ['abcddefg']))

//
// leetcode
//

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return array_strings_are_equal(word1, word2)
}
