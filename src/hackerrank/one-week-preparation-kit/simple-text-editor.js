/**
 * Simple Text Editor
 * @see https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem
 */
function processData (input) {
  const lines = input.split('\n')
  let editor = ''
  const undos = []

  const execute = (operation, argument, undoing = false) => {
    switch (operation) {
      case '1':
        if (undoing == false) {
          undos.push(['2', argument.length])
        }
        editor = editor.concat(argument)
        break
      case '2':
        argument = parseInt(argument)
        if (undoing === false) {
          undos.push(['1', editor.slice(editor.length - argument)])
        }
        editor = editor.slice(0, editor.length - argument)
        break
      case '3':
        console.log(editor.charAt(argument - 1))
        break
      case '4':
        if (undos.length > 0) {
          execute(...undos.pop(), true)
        }
        break
    }
  }

  lines.slice(1).forEach(line => {
    const [operation, argument] = line.split(' ')
    execute(operation, argument)
  })
}

module.exports = processData
