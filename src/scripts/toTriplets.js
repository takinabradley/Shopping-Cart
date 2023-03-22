// Ex: [1, 2, 3, 4, 5, 6] -> [[1, 2, 3], [4, 5, 6]]
export default function toTriplets(triplets, item) {
  const tripletsLength = triplets.length
  const lastArrayLength =
    triplets.length !== 0 ? triplets[tripletsLength - 1].length : null

  if (tripletsLength === 0) {
    // if it's the first pass, add a new array with the item
    triplets.push([item])
  } else if (lastArrayLength < 3) {
    // if the last array in the list doesn't have three items yet, push item to last array
    triplets[tripletsLength - 1].push(item)
  } else {
    // otherwise, add another array with the current item
    triplets.push([item])
  }

  return triplets
}
