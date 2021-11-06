const insertionSort = require('../../src/sorting/insertion')

test('insertion sort', () => {
  const arr = [4, 5, 3, 7, 2]
  const sorted = [...arr].sort((a, b) => a - b)

  insertionSort(arr)

  expect(arr).toEqual(sorted)
})
