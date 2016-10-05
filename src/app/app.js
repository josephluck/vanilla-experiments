const api = require('../../utils/api')
const views = require('../views')

module.exports = {
  run () {
    views.renderScaffolding(document.body)
  },
  search (query) {
    api.search.getMovie({
      query: query
    }, function(data) {
      console.log(JSON.parse(data))
    }, function(error) {
      console.log(error)
    })
  }
}
