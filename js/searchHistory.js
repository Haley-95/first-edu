const search = document.querySelector('.form-input-search')
const searchHistory = document.querySelector('.gnb-search .search-history')

search.addEventListener('focus', () => {
  searchHistory.classList.add('is-active')
})

search.addEventListener('blur', () => {
  searchHistory.classList.remove('is-active')
})
