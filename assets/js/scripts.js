const burger = document.querySelector('.burger'),
			header = document.querySelector('header'),
			check = document.querySelector('#check')

burger.addEventListener('click', () => {
	if (check.checked) {
		header.classList.add('active')
    document.body.style.overflowY = 'hidden'
	} else {
		header.classList.remove('active')
    document.body.style.overflowY = ''
	}
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) { 
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
})

const burgerLinks = document.querySelectorAll('.HeaderHead nav ul li a')

burgerLinks.forEach(item => {
  item.addEventListener('click', () => {
    if (header.classList.contains('active')) {
      header.classList.remove('active')
      document.body.style.overflowY = ''
      check.checked = false
    }
  })
})

const factionsItems = document.querySelectorAll('.factionsItem');

factionsItems.forEach(item => {
		item.addEventListener('mouseover', () => {
				factionsItems.forEach(otherItem => {
						otherItem.classList.remove('active')
				})
				item.classList.add('active')
		})
})

const factionsMoreInner = document.querySelectorAll('.factionsMoreInner')

factionsMoreInner.forEach((item, i) => {
  switch (i) {
    case 0:
      item.style.background = "url('/assets/img/bg/badlands.png') center / cover no-repeat"
      break
    case 1:
      item.style.background = "url('/assets/img/bg/glacial-frontier.png') center / cover no-repeat"
      break
    case 2:
      item.style.background = "url('/assets/img/bg/sundered-grove.png') center / cover no-repeat"
      break
    case 3:
      item.style.background = "url('/assets/img/bg/sky-citadel.png') center / cover no-repeat"
      break
    default:
      break
  }
})

function factionsMoreCloseFunc() {
  factionsMoreInner.forEach(inner => {
    inner.classList.remove('active')
  })
}

const factionsItemBody = document.querySelectorAll('.factionsItemBody .button')
const factionsMoreClose = document.querySelectorAll('.factionsMoreInnerHead .button.close')
const factionsMoreNext = document.querySelectorAll('.factionsMoreInnerHead .button.next')

factionsMoreClose.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    factionsMoreCloseFunc()
  })
})

factionsItemBody.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    factionsMoreCloseFunc()
    factionsMoreInner[i].classList.toggle('active')
  })
})

factionsMoreNext.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    const nextIndex = (i + 1) % factionsMoreInner.length
    factionsMoreCloseFunc()
    factionsMoreInner[nextIndex].classList.add('active')
  })
})


const meetItem = document.querySelectorAll('.meetItem')

meetItem.forEach(item => {
  item.addEventListener('click', () => {
    meetItem.forEach(otherItem => {
      otherItem.classList.remove('active')
  })
  item.classList.add('active')
  })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          })
      }
  })
})