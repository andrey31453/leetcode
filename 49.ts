//
// types
//

interface I_Strings_Map {
  add(string: string): void
  uniques(): uniques_map
}

type string_map = {
  origin: string
  sort: string
}

type uniques_map = Set<string>
type grouped_anagrams = string[][]

//
// group_anagrams__1
//

class Strings_Map implements I_Strings_Map {
  #map: string_map[]
  #uniques_map: uniques_map

  constructor() {
    this.#map = []
    this.#uniques_map = new Set()
  }

  #sort_string(string: string): string {
    return string.split('').sort().join('')
  }

  #create_value(string: string): string_map {
    const sotr_string = this.#sort_string(string)

    return {
      origin: string,
      sort: sotr_string,
    }
  }

  #add_value(value: string_map): void {
    this.#map.push(value)
  }

  #add_unique(sort_string: string): void {
    this.#uniques_map.add(sort_string)
  }

  add(string: string): void {
    const value = this.#create_value(string)

    this.#add_value(value)
    this.#add_unique(value.sort)
  }

  uniques(): uniques_map {
    return this.#uniques_map
  }

  values(sort_string: string): string[] {
    return this.#map
      .filter((value) => value.sort === sort_string)
      .map((value) => value.origin)
  }
}

const group_anagrams__1 = (strings: string[]): grouped_anagrams => {
  const strings_map = new Strings_Map()
  strings.forEach(strings_map.add, strings_map)

  const grouped_anagrams: grouped_anagrams = []
  const uniques = strings_map.uniques()

  uniques.forEach((unique) => {
    const values = strings_map.values(unique)
    grouped_anagrams.push(values)
  })

  return grouped_anagrams
}

//
// group_anagrams__2
//

type anagrams_map = Map<string, string[]>

const group_anagrams__2 = (strings: string[]): grouped_anagrams => {
  const grouped_anagrams: anagrams_map = new Map()

  strings.forEach((string) => {
    const sort_string = string.split('').sort().join('')

    const current_group = grouped_anagrams.get(sort_string)
    let update_group
    if (current_group) {
      update_group = [...current_group, string]
    } else {
      update_group = [string]
    }

    grouped_anagrams.set(sort_string, update_group)
  })

  const answ: grouped_anagrams = []
  grouped_anagrams.forEach((anagrams) => answ.push(anagrams))

  return answ
}

//
// group_anagrams__3
//

const group_anagrams__3 = (strings: string[]): grouped_anagrams => {
  const anagrams_map: { [key: string]: string[] } = {}

  strings.forEach((string) => {
    const sort_string = string.split('').sort().join('')

    anagrams_map[sort_string] = anagrams_map[sort_string]
      ? [...anagrams_map[sort_string], string]
      : [string]
  })

  return Object.keys(anagrams_map).reduce(
    (answ: grouped_anagrams, sort_string: string) => {
      answ.push(anagrams_map[sort_string])
      return answ
    },
    []
  )
}

//
// tests
//

console.log('---- ---- 1 ---- ----')
console.log(group_anagrams__1(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(group_anagrams__1(['']))
console.log(group_anagrams__1(['a']))

console.log('---- ---- 2 ---- ----')
console.log(group_anagrams__2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(group_anagrams__2(['']))
console.log(group_anagrams__2(['a']))

console.log('---- ---- 3 ---- ----')
console.log(group_anagrams__3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(group_anagrams__3(['']))
console.log(group_anagrams__3(['a']))

//
// leetcode
//

function groupAnagrams(strings: string[]): string[][] {
  return group_anagrams__2(strings)
}
