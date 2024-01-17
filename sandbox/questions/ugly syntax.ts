interface I_user {
  id: number
  name: string
}
interface I_message {
  id: string
}

const user: I_user = {
  id: 23,
  name: 'fjshfk',
}
const message: I_message = {
  id: '23',
}

const get_id1 = <T extends { id: any }>(
  data: T
): T extends { id: infer U } ? U : never => data.id

const user_id1 = get_id1(user)
const message_id1 = get_id1(message)

//
//
//

interface i_get_id {
  <T extends { id: any }>(data: T): T extends { id: infer U } ? U : never
}
type t_get_id1 = <T extends { id: any }>(
  data: T
) => T extends { id: infer U } ? U : never
const get_id2: t_get_id1 = (data) => data.id

const user_id2 = get_id2(user)
const message_id2 = get_id2(message)
