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
      <div>Result</div>
    `
  },
  renderResults (elm, results) {
    elm.innerHTML = ''

    const resultElms = results.map(this.generateResult)
    console.log(resultElms)
  }
}
