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
    events.attachEvent(searchInputElm, 'keydown', this.events.onSearch.bind(this, this.search))
  },
  events: {
    onSearch (search, e) {
      console.log(search, e.target.value)
      search(e.target.value).then((results) => {
        console.log(results)
      }, (error) => {
        console.log(error)
      })
    }
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
