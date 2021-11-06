/*
 * Quick Sort
 * Reference: https://www.geeksforgeeks.org/quick-sort/
 */
function quickSort (arr, low, high) {
  if (low >= high) {
    return
  }

  const pivot = arr[high]
  let cut = low - 1

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      cut++
      [arr[cut], arr[i]] = [arr[i], arr[cut]]
    }
  }

  cut++
  [arr[cut], arr[high]] = [arr[high], arr[cut]]

  quickSort(arr, low, cut - 1)
  quickSort(arr, cut + 1, high)
}

module.exports = quickSort
