const menuBtn = document.querySelector('.mobile-menu-button');
menuBtn.addEventListener('click', () => {
	document.body.classList.toggle('mobile-menu-open');
});


const mobileMenuBtns = document.querySelector('.mobile-menu-btns');
mobileMenuBtns.addEventListener('click', () => {
	document.body.classList.remove('mobile-menu-open');
});


const mobileRarityMenuBtn = document.querySelector('.mobile-rarity-menu-btn');
mobileRarityMenuBtn.addEventListener('click', () => {
	document.body.classList.toggle('mobile-rarity-menu-open');
});


const teammates = document.querySelector('.teammate');
teammates.addEventListener('mousemove', function (ev) {
	document.querySelector('.balloon').style.transform = 'translateY(' + (ev.clientY - 200) + 'px)';
	document.querySelector('.balloon').style.transform += 'translateX(' + (ev.clientX - 100) + 'px)';
}, false);