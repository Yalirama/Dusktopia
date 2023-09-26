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

const factionsMoreInner = document.querySelectorAll('.factionsMoreInner');

factionsMoreInner.forEach((item, i) => {
  switch (i) {
    case 0:
      item.style.background = "url('/assets/img/bg/badlands.png') center / cover no-repeat";
      break;
    case 1:
      item.style.background = "url('/assets/img/bg/glacial-frontier.png') center / cover no-repeat";
      break;
    case 2:
      item.style.background = "url('/assets/img/bg/sundered-grove.png') center / cover no-repeat";
      break;
    case 3:
      item.style.background = "url('/assets/img/bg/sky-citadel.png') center / cover no-repeat";
      break;
    default:
      break;
  }
});
const factionsItemBody = document.querySelectorAll('.factionsItemBody .button');
const factionsMoreClose = document.querySelectorAll('.button.close')

factionsMoreClose.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		factionsMoreInner.forEach(inner => {
      inner.classList.remove('active');
    });
	})
})

factionsItemBody.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    factionsMoreInner.forEach(inner => {
      inner.classList.remove('active');
    });
    factionsMoreInner[i].classList.toggle('active');
  });
});
