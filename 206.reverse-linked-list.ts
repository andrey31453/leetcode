interface I_list_node {
  val: number
  next: List_node | null
}

class List_node implements I_list_node {
  val: number
  next: List_node | null

  constructor(val?: number, next?: List_node | null) {
    this.val = val !== undefined ? val : 0
    this.next = next !== undefined ? next : null
  }
}
//
// implements
//

// const reverse_list = (head: I_list_node | null): I_list_node | null => {
//   let [left, right] = [null, head]

//   while (right) {
//     ;[left, left.next, right] = [right, left, right.next]
//   }

//   return left
// }

//
// recursio
//

const reverse_list = (head: I_list_node | null): I_list_node | null => {
  if (!head || !head.next) return head

  const next = reverse_list(head.next)
  head.next.next = head
  head.next = null

  return next
}

/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

function reverseList(head: I_list_node | null): I_list_node | null {
  return reverse_list(head)
}
