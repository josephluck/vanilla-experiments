const example = require('./example')
const test = require('tape')

test('example test', function (t) {
  t.plan(1)

  t.equal(typeof example.run, 'function')
})
