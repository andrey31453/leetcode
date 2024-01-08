const roman_numerals = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
])

const get_int_modals = (roman_values: string[]): number[] => {
  return roman_values.map((v) => {
    const numeral = roman_numerals.get(v)
    return numeral ? numeral : 0
  })
}

const get_int_signs = (values: number[]): number[] => {
  return values.map((v, i) => {
    const next_value = values[i + 1]

    if (!next_value) return 1
    if (!v) return 1
    if (next_value <= v) return 1

    return -1
  })
}

const get_int = (int_modals: number[], int_signs: number[]): number => {
  return int_modals.reduce((int, int_modal, idx) => {
    const current_sign = int_signs[idx]
    const current_int = current_sign * int_modal

    return (int += current_int)
  }, 0)
}

const roman_to_int = (s: string): number => {
  const roman_values = s.split('')
  const int_modals = get_int_modals(roman_values)
  const int_signs = get_int_signs(int_modals)

  const int = get_int(int_modals, int_signs)

  return int
}

console.log(roman_to_int('III'))
console.log(roman_to_int('LVIII'))
console.log(roman_to_int('MCMXCIV'))

/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

function romanToInt(s: string): number {
  return roman_to_int(s)
}
