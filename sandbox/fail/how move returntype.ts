const ac1 = (age: number) => ({
  type: 'set-age' as const,
  age,
})
const ac2 = (first_name: string, last_name: string) => ({
  type: 'set-names' as const,
  first_name,
  last_name,
})

type t_ac1 = ReturnType<typeof ac1>
type t_ac2 = ReturnType<typeof ac2>

const actions = { ac1, ac2 }

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
type ac = ReturnType<PropertiesType<typeof actions>>

// type PropertiesType<T> = T extends { [key: string]: infer U }
//   ? ReturnType<U>
//   : never
// type ac = PropertiesType<typeof actions>

const ac_test2: ac = {
  type: 'set-names',
  first_name: '',
  last_name: '',
}
const ac_test1: ac = {
  type: 'set-age',
  age: 34,
}
