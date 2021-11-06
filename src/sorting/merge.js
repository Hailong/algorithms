/**
 * Merge Sort
 * @see https://www.geeksforgeeks.org/merge-sort/
 */
function mergeSort (arr, low, high) {
  if (low >= high) {
    return
  }

  const mid = parseInt((low + high) / 2)

  mergeSort(arr, low, mid)
  mergeSort(arr, mid + 1, high)

  const left = arr.slice(low, mid + 1)
  const right = arr.slice(mid + 1, high + 1)

  let i = 0
  let j = 0
  let k = low

  while (i <= mid - low && j <= high - mid - 1) {
    if (left[i] < right[j]) {
      arr[k++] = left[i++]
    } else if (left[i] > right[j]) {
      arr[k++] = right[j++]
    } else {
      arr[k++] = left[i++]
      arr[k++] = right[j++]
    }
  }

  while (i <= mid - low) {
    arr[k++] = left[i++]
  }

  while (j <= high - mid - 1) {
    arr[k++] = right[j++]
  }
}

module.exports = mergeSort
