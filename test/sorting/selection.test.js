const selectionSort = require('../../src/sorting/selection')

test('selection sort', () => {
  const arr = [4, 5, 3, 7, 2]
  const sorted = [2, 3, 4, 5, 7]

  selectionSort(arr)

  expect(arr).toEqual(sorted)
})
