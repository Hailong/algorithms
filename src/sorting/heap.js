/**
 * Heap Sort
 * @see https://en.wikipedia.org/wiki/Heapsort
 */
function heapSort (arr) {
  const iParent = child => parseInt((child - 1) / 2)
  const iLeftChild = parent => parent * 2 + 1
  const iRightChild = parent => parent * 2 + 2

  const heapify = (arr) => {
    let start = iParent(arr.length - 1)

    while (start >= 0) {
      siftDown(arr, start, arr.length - 1)
      start--
    }
  }

  const siftDown = (arr, start, end) => {
    let parent = start

    while (iLeftChild(parent) <= end) {
      let downTo = parent

      if (arr[parent] < arr[iLeftChild(parent)]) {
        downTo = iLeftChild(parent)
      }

      if (iRightChild(parent) <= end && arr[downTo] < arr[iRightChild(parent)]) {
        downTo = iRightChild
      }

      if (downTo === parent) {
        return
      } else {
        [arr[parent], arr[downTo]] = [arr[downTo], arr[parent]]
        parent = downTo
      }
    }
  }

  // Build the heap in array a so that largest value is at the root
  heapify(arr)

  let end = arr.length - 1

  while (end > 0) {
    [arr[0], arr[end]] = [arr[end], arr[0]]
    end--
    siftDown(arr, 0, end)
  }
}

module.exports = heapSort
