const quickSort = require('../../src/sorting/quick')

test('quick sort', () => {
  const arr = [4, 5, 3, 7, 2]

  quickSort(arr, 0, arr.length - 1)

  expect(arr).toEqual(arr.sort((a, b) => a - b))
})
