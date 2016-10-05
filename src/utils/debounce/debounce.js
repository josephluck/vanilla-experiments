// Debounce taken from https://remysharp.com/2010/07/21/throttling-function-calls

module.exports = function (fn, delay) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
