interface I_alfabet {
  numeric_count: number
  numerics: {
    [key: string]: number
  }
  get_numeric(): number
}

class Alfabet implements I_alfabet {
  numeric_count = 0
  numerics = {}
  get_numeric() {
    return ++this.numeric_count
  }
}

const get_letter_numeric = (alfabet: I_alfabet, letter: string): number => {
  if (!alfabet.numerics[letter]) {
    alfabet.numerics[letter] = alfabet.get_numeric()
  }

  return alfabet.numerics[letter]
}

const get_word_map = (s: string): number[] => {
  const alfabet = new Alfabet()

  return s.split('').reduce((map: number[], letter: string) => {
    const letter_numeric = get_letter_numeric(alfabet, letter)
    map.push(letter_numeric)

    return map
  }, [])
}

const get_difference = (s: number[], t: number[]): boolean => {
  let difference = false

  s.forEach((_, idx) => {
    if (difference) return

    if (s[idx] !== t[idx]) difference = true
  })

  return difference
}

const is_isomorphic = (s: string, t: string): boolean => {
  const maps = { s: get_word_map(s), t: get_word_map(t) }
  const maps_difference = get_difference(maps.s, maps.t)

  return !maps_difference
}

// console.log(is_isomorphic('egg', 'add'))
// console.log(is_isomorphic('foo', 'bar'))
// console.log(is_isomorphic('paper', 'title'))

/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

function isIsomorphic(s: string, t: string): boolean {
  return is_isomorphic(s, t)
}
