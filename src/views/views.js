module.exports = {
  noResultsTemplate () {
    return `
      <div class='no-results'>
        No results
      </div>
    `
  },
  releaseDateStatTemplate (releaseDate) {
    if (releaseDate && releaseDate.length) {
      return `
        <div class='result-stat'>
          <div class='result-stat-label'>
            Released on
          </div>
          <div class='result-stat-content'>
            ${releaseDate}
          </div>
        </div>
      `
    } else {
      return ''
    }
  },
  voteStatTemplate (average, count) {
    if (average && count) {
      return `
        <div class='result-stat'>
          <div class='result-stat-label'>
            Rating
          </div>
          <div class='result-stat-content'>
            ${average}/10 (based on ${count} votes)
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
          ${this.releaseDateStatTemplate(result.release_date)}
          ${this.voteStatTemplate(result.vote_average, result.vote_count)}
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
