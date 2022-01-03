const btn = document.querySelector('.mobile-menu-button');

btn.addEventListener('click', () => {
	document.body.classList.toggle('mobile-menu-open');
});