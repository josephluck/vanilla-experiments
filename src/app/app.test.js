const app = require('./app')
const test = require('tape')

test('app test', function (t) {
  t.plan(1)
  t.equal(typeof app.run, 'function')
})
