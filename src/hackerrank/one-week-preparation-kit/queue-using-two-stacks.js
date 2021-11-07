/**
 * Queue using Two Stacks
 * @see https://www.hackerrank.com/challenges/one-week-preparation-kit-queue-using-two-stacks/problem
 */
class Queue {
  constructor () {
    this.inStack = []
    this.outStack = []
  }

  loadOutStack () {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop())
    }
  }

  peekOutStack () {
    if (this.outStack.length > 0) {
      return this.outStack[this.outStack.length - 1]
    }

    return undefined
  }

  enqueue (value) {
    this.inStack.push(value)
  }

  dequeue () {
    if (this.outStack.length > 0) {
      return this.outStack.pop()
    }

    this.loadOutStack()

    return this.outStack.pop()
  }

  front () {
    if (this.peekOutStack()) {
      return this.peekOutStack()
    }

    this.loadOutStack()

    return this.peekOutStack()
  }
}

/**
 * Queue using Two Stacks
 * @see https://www.hackerrank.com/challenges/one-week-preparation-kit-queue-using-two-stacks/problem
 */
function processData (input) {
  const lines = input.split('\n')
  const queue = new Queue()

  lines.slice(1).forEach(query => {
    const [type, value] = query.split(' ')

    switch (type) {
      case '1':
        queue.enqueue(value)
        break

      case '2':
        queue.dequeue()
        break

      case '3':
        if (queue.front()) {
          console.log(queue.front())
        }
        break
    }
  })
}

module.exports = processData
