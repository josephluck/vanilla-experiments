const api = require('../../utils/api')
const views = require('../views')
const events = require('../events')

module.exports = {
  insertRootElm () {
    const rootElm = document.createElement('div')
    rootElm.id = 'root'
    document.body.appendChild(rootElm)
  },
  attachEvents() {
    const searchInputElm = document.getElementById('search-input')
    events.attachEvent(searchInputElm, 'keydown', function(e) {
      console.log(e.target.value)
    })
  },
  run () {
    this.insertRootElm()
    views.renderScaffolding(document.getElementById('root'))
    this.attachEvents()
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
