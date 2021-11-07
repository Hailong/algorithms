const processData = require('../../../src/hackerrank/one-week-preparation-kit/simple-text-editor')

test('Simple Text Editor', () => {
  const consoleLog = console.log

  let output = ''
  console.log = (...data) => {
    output = `${output}${data}\n`
  }

  processData(INPUT)

  // restore (is necessary?)
  console.log = consoleLog

  expect(output).toEqual(EXPECTED)
})

const INPUT = `8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1
`

const EXPECTED = `c
y
a
`
