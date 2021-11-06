const quickSort = require('../../src/sorting/quick')

test('quick sort', () => {
  const arr = [4, 5, 3, 7, 2]
  const sorted = [...arr].sort((a, b) => a - b)

  quickSort(arr, 0, arr.length - 1)

  expect(arr).toEqual(sorted)
})
