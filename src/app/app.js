const api = require('../../utils/api')
const views = require('../views')
const events = require('../events')

module.exports = {
  run () {
    this.insertRootElm()
    views.renderScaffolding(document.getElementById('root'))
    this.attachEvents()
  },
  insertRootElm () {
    const rootElm = document.createElement('div')
    rootElm.id = 'root'
    document.body.appendChild(rootElm)
  },
  attachEvents () {
    const searchInputElm = document.getElementById('search-input')
    events.attachEvent(searchInputElm, 'keydown', (e) => {
      const searchQuery = e.target.value
      this.search(searchQuery).then((response) => {
        console.log(response)
        const resultsElm = document.getElementById('results-list')
        views.renderResults(resultsElm, response.results)
      }, (error) => {
        console.log(error)
      })
    })
  },
  search (query) {
    return new Promise((resolve, reject) => {
      api.search.getMovie({
        query: query
      }, function (data) {
        resolve(JSON.parse(data))
      }, function (error) {
        reject(error)
      })
    })
  }
}
