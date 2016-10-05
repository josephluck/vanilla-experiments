const api = require('../../utils/api')
const views = require('../views')
const events = require('../events')
const debounce = require('../utils/debounce')

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
    const resultsElm = document.getElementById('results-list')
    const onSearchEvent = debounce((e) => {
      const searchQuery = e.target.value
      if (searchQuery) {
        this.search(searchQuery).then((response) => {
          console.log(response)
          if (response.results.length) {
            views.renderResults(resultsElm, response.results)
          } else {
            views.renderNoResults(resultsElm)
          }
        }, (error) => {
          console.log(error)
        })
      } else {
        views.renderNoResults(resultsElm)
      }
    }, 100)
    events.attachEvent(searchInputElm, 'keyup', onSearchEvent)
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
