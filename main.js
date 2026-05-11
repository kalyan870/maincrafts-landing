const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('navMenu')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  const icon = hamburger.querySelector('i')
  icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars'
})

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active')
    hamburger.querySelector('i').className = 'fas fa-bars'
  })
})

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      link.nextElementSibling.classList.toggle('show')
    }
  })
})
