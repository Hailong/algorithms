/**
 * Insertion Sort
 * @see https://www.geeksforgeeks.org/insertion-sort/
 */
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]
    let j = i - 1

    while (arr[j] > val && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = val
  }
}

module.exports = insertionSort
