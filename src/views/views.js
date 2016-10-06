module.exports = {
  noResultsTemplate () {
    return `
      <div>
        No results
      </div>
    `
  },
  resultTemplate (result) {
    return `
      <div class='result'>
        ${result.original_title}
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
          ${this.noResultsTemplate()}
        </div>
      </div>
    `
  },
  renderResults (elm, results) {
    const resultsElm = results.map(this.resultTemplate).join('')
    elm.innerHTML = resultsElm
    this.removeLoading(elm)
  },
  renderNoResults (elm) {
    elm.innerHTML = this.noResultsTemplate()
    this.removeLoading(elm)
  },
  applyLoading (elm) {
    elm.classList.add('loading')
  },
  removeLoading (elm) {
    elm.classList.remove('loading')
  }
}
