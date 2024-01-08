//
// max_dist_to_closet
//

const find_busy_seat = (seats: number[], dist: number) => {
  for (let index = dist; index < seats.length; index++) {
    if (seats[index] === 1) return index - dist
  }

  return seats.length + 1
}

const max_dist_to_closet = (seats: number[]): number => {
  let max_dist: number = 0
  let left_dist: number = seats.length + 1

  seats.forEach((_, idx) => {
    const right_dist = find_busy_seat(seats, idx)
    const current_dist = Math.min(left_dist + 1, right_dist)

    left_dist = current_dist
    max_dist = Math.max(max_dist, current_dist)
  })

  return max_dist
}

//
// tests
//

console.log(max_dist_to_closet([1, 0, 0, 0, 1, 0, 1]))
console.log(max_dist_to_closet([1, 0, 0, 0]))
console.log(max_dist_to_closet([0, 1]))

//
// leetcode
//

function maxDistToClosest(seats: number[]): number {
  return max_dist_to_closet(seats)
}
