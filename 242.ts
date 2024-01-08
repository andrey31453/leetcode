//
// is_anagram__1
//

type T_word_map = Map<string, number>
type T_word_maps = T_word_map[]

const get_map = (word: string): T_word_map => {
  return word.split('').reduce((word_map: T_word_map, letter: string) => {
    const letter_counter = word_map.get(letter)

    return letter_counter
      ? word_map.set(letter, letter_counter + 1)
      : word_map.set(letter, 1)
  }, new Map())
}

const get_maps = (strings: string[]): T_word_maps => {
  return strings.reduce((word_maps: T_word_maps, string: string) => {
    word_maps.push(get_map(string))
    return word_maps
  }, [])
}

const delete_union_letters = (word_maps: T_word_maps): T_word_maps => {
  const random_map = word_maps[0]
  word_maps.shift()

  random_map?.forEach((quantity, letter) => {
    let letter_status = true

    word_maps.forEach((word_map) => {
      if (word_map.get(letter) === quantity) word_map.delete(letter)
      else letter_status = false
    })

    if (letter_status) random_map.delete(letter)
  })

  word_maps.push(random_map)

  return word_maps
}

const not_anagram = (word_maps: T_word_maps): boolean => {
  const not_union_maps = delete_union_letters(word_maps)

  return not_union_maps.reduce(
    (not_anagram: boolean, map: T_word_map): boolean =>
      not_anagram || Boolean(map.size),
    false
  )
}

const is_anagram__1 = (...strings: string[]): boolean => {
  const maps = get_maps(strings)

  return !not_anagram(maps)
}

//
// is_anagram__2
//

const sort_strings = (strings: string[]): string[] => {
  return strings.map((string) => string.split('').sort().join(''))
}

const is_anagram__2 = (...strings: string[]): boolean => {
  const sorting_strings = sort_strings(strings)
  const random_string = sorting_strings[0]
  sorting_strings.shift()

  return !sorting_strings.reduce(
    (not_anagram, sorting_string) =>
      not_anagram || sorting_string !== random_string,
    false
  )
}

//
// is_anagram__3
//

interface I_dictionary {
  set(string: string, increment: number): void
  get_size(): number
}

class Dictionary implements I_dictionary {
  #dictionary = new Map()

  #set_letter(letter: string, increment: number) {
    this.#increment_letter(letter, increment)
    this.#update_letter(letter)
  }

  #increment_letter(letter: string, increment: number) {
    const letter_quantity = this.#dictionary.get(letter)
    letter_quantity
      ? this.#dictionary.set(letter, letter_quantity + increment)
      : this.#dictionary.set(letter, increment)
  }

  #update_letter(letter: string) {
    if (this.#dictionary.get(letter) === 0) this.#dictionary.delete(letter)
  }

  set(string: string, increment: number) {
    string.split('').forEach((l) => this.#set_letter(l, increment))
  }

  log() {
    console.log(this.#dictionary)
  }

  get_size() {
    return this.#dictionary.size
  }
}

const set_dictionary = (string: string, increment: number) => {}

const is_anagram__3 = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false

  const dictionary: Dictionary = new Dictionary()
  dictionary.set(s, 1)
  dictionary.set(t, -1)
  const not_unique_letter_quantity = dictionary.get_size()

  return Boolean(!not_unique_letter_quantity)
}

//
// tests
//

console.log('---- ---- 1 ---- ----')
console.log('true: ', is_anagram__1('anagram', 'nagaram'))
console.log('false: ', is_anagram__1('rat', 'car'))
console.log('false: ', is_anagram__1('rrat', 'raat'))
console.log('true: ', is_anagram__1('cat', 'tac', 'tca'))
console.log('false: ', is_anagram__1('cat', 'tac', 'tcar'))
console.log('false: ', is_anagram__1('ab', 'a'))

console.log('---- ---- 2 ---- ----')
console.log('true: ', is_anagram__2('anagram', 'nagaram'))
console.log('false: ', is_anagram__2('rat', 'car'))
console.log('false: ', is_anagram__2('rrat', 'raat'))
console.log('true: ', is_anagram__2('cat', 'tac', 'tca'))
console.log('false: ', is_anagram__2('cat', 'tac', 'tcar'))
console.log('false: ', is_anagram__2('ab', 'a'))

console.log('---- ---- 3 ---- ----')
console.log('true: ', is_anagram__3('anagram', 'nagaram'))
console.log('false: ', is_anagram__3('rat', 'car'))
console.log('false: ', is_anagram__3('rrat', 'raat'))
console.log('true: ', is_anagram__3('cat', 'tac'))
console.log('false: ', is_anagram__3('ab', 'a'))

//
// leetcode
//

function isAnagram(s: string, t: string): boolean {
  return is_anagram__1(s, t)
}
