//
// base interfaces
//

interface I_tree_node {
  val: number
  left: C_tree_node | null
  right: C_tree_node | null
}

class C_tree_node implements I_tree_node {
  val: number
  left: C_tree_node | null
  right: C_tree_node | null

  constructor(
    val?: number,
    left?: C_tree_node | null,
    right?: C_tree_node | null
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

//
// has_path_sum__1
//

interface I_node_archive extends I_tree_node {
  sum: number
}

const is_leaf = (root: C_tree_node): boolean => {
  return Boolean(root.left) || Boolean(root.right)
}

const update_nodes = (nodes: I_node_archive[]): I_node_archive[] => {
  const current_node: I_node_archive = nodes[0]
  const current_node_sum = current_node.val + current_node.sum
  nodes.shift()

  if (current_node.left)
    nodes.push({ ...current_node.left, sum: current_node_sum })
  if (current_node.right)
    nodes.push({ ...current_node.right, sum: current_node_sum })

  return nodes
}

const is_target_node = (node: I_node_archive, target_sum: number): boolean => {
  if (node.left || node.right) return false

  return node.sum + node.val === target_sum
}

const has_path_sum_util = (
  nodes: I_node_archive[],
  target_sum: number
): boolean => {
  if (!nodes.length) return false

  const current_node: I_node_archive = nodes[0]
  nodes = update_nodes(nodes)

  return (
    is_target_node(current_node, target_sum) ||
    has_path_sum_util(nodes, target_sum)
  )
}

const has_path_sum__1 = (
  root: C_tree_node | null,
  target_sum: number
): boolean => {
  if (root === null) return false

  const root_archive: I_node_archive = {
    ...root,
    sum: 0,
  }

  return has_path_sum_util([root_archive], target_sum)
}

//
// has_path_sum__2
//

const has_path_sum__2 = (
  root: C_tree_node | null,
  target_sum: number
): boolean => {
  const wrapper = (node: C_tree_node | null, current_cum: number): boolean => {
    if (node === null) return false
    current_cum += node.val

    if (!node.left && !node.right) return current_cum === target_sum

    return wrapper(node.left, current_cum) || wrapper(node.right, current_cum)
  }

  return wrapper(root, 0)
}

//
// tests
//

const t1 = new C_tree_node(7)
const t2 = new C_tree_node(2)
const t3 = new C_tree_node(1)
const t4 = new C_tree_node(11, t1, t2)
const t5 = new C_tree_node(13)
const t6 = new C_tree_node(4, null, t3)
const t7 = new C_tree_node(4, t4)
const t8 = new C_tree_node(4, t5, t6)
const t9 = new C_tree_node(5, t7, t8)

console.log('1:', has_path_sum__1(t9, 22))
console.log('2:', has_path_sum__2(t9, 22))

//
// leetcode
//

/*
 * @lc app=leetcode id=112 lang=typescript
 */

function hasPathSum(root: C_tree_node | null, target_sum: number): boolean {
  return has_path_sum__2(root, target_sum)
}
