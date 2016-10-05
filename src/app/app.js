const api = require('../../utils/api')
const views = require('../views')

module.exports = {
  run () {
    const rootElm = document.createElement('div')
    rootElm.id = 'root'
    document.body.appendChild(rootElm)
    views.renderScaffolding(document.getElementById('root'))
  },
  search (query) {
    api.search.getMovie({
      query: query
    }, function (data) {
      console.log(JSON.parse(data))
    }, function (error) {
      console.log(error)
    })
  }
}
