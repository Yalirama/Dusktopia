const burger = document.querySelector('.burger'),
			intro = document.querySelector('.intro'),
			check = document.querySelector('#check')

burger.addEventListener('click', () => {
	if (check.checked) {
		intro.classList.add('active')
	} else {
		intro.classList.remove('active')
	}
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