const mediaDesktop = window.matchMedia('screen and (min-width: 1200px)')
const toggleMenuBtn = document.querySelector('.toggle-menu')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const sideBar = document.querySelector('.sidebar')
const gnb = document.querySelector('.gnb')

if (mediaDesktop.matches) {
  open.classList.add('visually-hidden')
  sideBar.classList.add('is-active')
  gnb.classList.add('is-active')
} else {
  close.classList.add('visually-hidden')
}

toggleMenuBtn.addEventListener('click', () => {
  sideBar.classList.toggle('is-active')
  gnb.classList.toggle('is-active')
  open.classList.toggle('visually-hidden')
  close.classList.toggle('visually-hidden')
})

/* Desktop Media Query Change Event */
window.addEventListener('resize', () => {
  if (mediaDesktop.matches) {
    sideBar.classList.add('is-active')
    gnb.classList.add('is-active')
    open.classList.add('visually-hidden')
    close.classList.remove('visually-hidden')
  } else {
    sideBar.classList.remove('is-active')
    gnb.classList.remove('is-active')
    open.classList.remove('visually-hidden')
    close.classList.add('visually-hidden')
  }
})
