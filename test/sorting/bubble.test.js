const bubbleSort = require('../../src/sorting/bubble')

test('bubble sort', () => {
  const arr = [4, 5, 3, 7, 2]
  const sorted = [...arr].sort((a, b) => a - b)

  bubbleSort(arr)

  expect(arr).toEqual(sorted)
})
