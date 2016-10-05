const api = require('../../utils/api')

module.exports = {
  run () {
    console.log(api)
    api.search.getMovie({
      query: 'transformers'
    }, function(data) {
      console.log(JSON.parse(data))
    }, function(error) {
      console.log(error)
    })
  }
}
