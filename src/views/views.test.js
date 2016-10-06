const views = require('./views')
const test = require('tape')

test('no results template', function (t) {
  t.plan(1)
  const view = views.noResultsTemplate()
  if (view.includes('no-results')) {
    t.pass('returns the correct template')
  } else {
    t.fail('does not return the correct template')
  }
})

test('release date template with data', function (t) {
  t.plan(1)
  const view = views.releaseDateStatTemplate('2016-03-02')
  if (view.includes('2016-03-02')) {
    t.pass('returns the correct template')
  } else {
    t.fail('does not return the correct template: did not return the specified release date')
  }
})

test('release date template without data', function (t) {
  t.plan(1)
  const view = views.releaseDateStatTemplate(null)
  if (view.length === 0) {
    t.pass('returns the correct template')
  } else {
    t.fail('does not return the correct template: it did not return a blank template when the release date does not exist')
  }
})

test('vote stat template with data', function (t) {
  t.plan(1)
  const view = views.voteStatTemplate(6, 100)
  if (view.includes('6/10') && view.includes('based on 100')) {
    t.pass('returns the correct template')
  } else {
    t.fail('does not return the correct template: did not return the specified vote stat when both average and count arguments exist')
  }
})

test('vote stat template without data', function (t) {
  t.plan(3)

  let view = views.voteStatTemplate(null, null)
  if (view.length === 0) {
    t.pass('returns the correct template when both average and count do not exist')
  } else {
    t.fail('does not return the correct template: it did not return a blank template when both average and count arguments are null')
  }

  view = views.voteStatTemplate(null, 1)
  if (view.length === 0) {
    t.pass('returns the correct template when average does not exist')
  } else {
    t.fail('does not return the correct template: it did not return a blank template when average argument is null')
  }

  view = views.voteStatTemplate(1, null)
  if (view.length === 0) {
    t.pass('returns the correct template when count does not exist')
  } else {
    t.fail('does not return the correct template: it did not return a blank template when count argument is null')
  }
})
