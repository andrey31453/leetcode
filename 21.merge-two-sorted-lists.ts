interface i_list_node {
  val: number
  next: i_list_node | null
}

class list_node implements i_list_node {
  val
  next

  constructor(val?: number, next?: t_list_node) {
    this.val = val !== undefined ? val : 0
    this.next = next !== undefined ? next : null
  }
}

type t_list_node = i_list_node | null

// const get_smallest_node_idx = (lists: t_list_node[]): number | null => {
//   let smallest_node_idx: number | null = null

//   lists.forEach((l, idx) => {
//     if (!l) return

//     smallest_node_idx = smallest_node_idx !== null ? smallest_node_idx : idx
//     const smallest_node = lists[smallest_node_idx]
//     if (smallest_node === null) return

//     if (l.val < smallest_node.val) {
//       smallest_node_idx = idx
//     }
//   })

//   return smallest_node_idx
// }

// const merge_lists = (...lists: t_list_node[]): t_list_node => {
//   const acc: t_list_node[] = []

//   let smallest_node_idx = get_smallest_node_idx(lists)

//   while (smallest_node_idx !== null) {
//     const smallest_node = lists[smallest_node_idx]
//     if (smallest_node === null) continue

//     acc.push(smallest_node)
//     lists[smallest_node_idx] = smallest_node.next
//     smallest_node_idx = get_smallest_node_idx(lists)

//     const last_acc = acc[acc.length - 1]
//     if (last_acc === null) continue

//     last_acc.next = smallest_node_idx !== null ? lists[smallest_node_idx] : null
//   }

//   return acc[0] || null
// }

const has_list = (lists: t_list_node[]): boolean =>
  lists.reduce((answ, l) => answ || Boolean(l), false)

const get_smallest_list_idx = (lists: t_list_node[]): any =>
  lists.reduce((answ, l, i) => {
    if (l === null) return answ
    if (answ === -1) return i

    const answ_list = lists[answ]
    if (answ_list === null) return i

    return l.val < answ_list.val ? i : answ
  }, -1)

const merge_lists = (...lists: t_list_node[]): t_list_node => {
  let dummy, tail
  dummy = tail = new list_node()

  while (has_list(lists)) {
    const smallest_list_idx = get_smallest_list_idx(lists)

    const smallest_list = lists[smallest_list_idx]
    if (!smallest_list) continue

    tail.next = smallest_list
    lists[smallest_list_idx] = smallest_list.next
    tail = smallest_list
  }

  return dummy.next
}

//
// tests
//

const l12 = new list_node(4, null)
const l11 = new list_node(2, l12)
const l10 = new list_node(1, l11)

const l22 = new list_node(4, null)
const l21 = new list_node(3, l22)
const l20 = new list_node(2, l21)

console.log(merge_lists(l10, l20))
console.log(merge_lists(null, null))

/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

function mergeTwoLists(list1: t_list_node, list2: t_list_node): t_list_node {
  return merge_lists(list1, list2)
}
