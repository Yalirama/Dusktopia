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