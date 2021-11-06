const randomIntArray = require('random-int-array')
const selectionSort = require('../../src/sorting/selection')

test('selection sort', () => {
  const arr = randomIntArray({ count: 1000, max: 100000 })
  const sorted = [...arr].sort((a, b) => a - b)

  selectionSort(arr)

  expect(arr).toEqual(sorted)
})
