module.exports = {
  noResultsTemplate () {
    return `
      <div class='no-results'>
        No results
      </div>
    `
  },
  resultStatTemplate (resultStat, label) {
    if (resultStat) {
      return `
        <div class='result-stat'>
          <div class='result-stat-label'>
            ${label}
          </div>
          <div class='result-stat-content'>
            ${resultStat}
          </div>
        </div>
      `
    } else {
      return ''
    }
  },
  resultTemplate (result) {
    return `
      <div class='result'>
        <div class='result-title'>
          ${result.original_title}
        </div>
        <div class='result-description'>
          ${result.overview}
        </div>
        <div class='result-stats'>
          ${this.resultStatTemplate(result.release_date, 'Released on')}

        </div>
      </div>
    `
  },
  renderScaffolding (elm) {
    elm.innerHTML = `
      <div id='search-bar'>
        <input id='search-input' />
      </div>
      <div id='results-list'>
        ${this.noResultsTemplate()}
      </div>
    `
  },
  renderResults (elm, results) {
    const resultsElm = results.map(this.resultTemplate.bind(this)).join('')
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
