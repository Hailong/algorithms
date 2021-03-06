const mergeSort = require('../../src/sorting/merge')

test('merge sort', () => {
  const arr = [4, 5, 3, 7, 2]
  const sorted = [...arr].sort((a, b) => a - b)

  mergeSort(arr, 0, arr.length - 1)

  expect(arr).toEqual(sorted)
})

test('merge sort 1', () => {
  const arr = [12, 11, 13, 5, 6, 7]
  const sorted = [...arr].sort((a, b) => a - b)

  mergeSort(arr, 0, arr.length - 1)

  expect(arr).toEqual(sorted)
})
