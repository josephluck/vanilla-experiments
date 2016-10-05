module.exports = {
  noResultsElm () {
    return `
      <div>
        No results
      </div>
    `
  },
  renderScaffolding (elm) {
    elm.innerHTML = `
      <div>
        <div id='search-bar'>
          <input id='search-input' />
        </div>
        <div id='results-list'>
          ${this.noResultsElm()}
        </div>
      </div>
    `
  },
  generateResult (result) {
    return `
      <div class='result'>
        ${result.original_title}
      </div>
    `
  },
  renderResults (elm, results) {
    const resultsElm = results.map(this.generateResult).join('')
    elm.innerHTML = resultsElm
  },
  renderNoResults (elm) {
    elm.innerHTML = this.noResultsElm()
  }
}
