const union_1:
  | {
      name: string
      key: string
    }
  | {
      name: number
      key: number
    } = {
  name: '2',
  key: 2,
}

const union_2:
  | {
      name: 't1'
      key1: string
    }
  | {
      name: 't2'
      key2: string
    } = {
  name: 't2',
  key1: '2',
}

const union_3:
  | {
      name: string
    }
  | {
      key: number
    } = {
  name: '2',
  key: 2,
}
