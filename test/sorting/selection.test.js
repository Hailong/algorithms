const selectionSort = require('../../src/sorting/selection')

test('selection sort', () => {
  const arr = [4, 5, 3, 7, 2]

  selectionSort(arr)

  expect(arr).toEqual(arr.sort((a, b) => a - b))
})
