(function() {

	(function() {

		const mobileMenu = document.querySelector('.mobile-menu');
		const container = document.querySelector('.container');
		const menuOpenLink = document.querySelector('.menu__btn_gamburger');
		const menuCloseLink = document.querySelector('.mobile-menu__btn_cross');

		menuOpenLink.addEventListener('click', (e) => {

			e.preventDefault();
			mobileMenu.classList.add('mobile-menu_show');
			container.classList.add('container_margin-top');
		});

		menuCloseLink.addEventListener('click', (e) => {

			e.preventDefault();
			mobileMenu.classList.remove('mobile-menu_show');
			container.classList.remove('container_margin-top');
		});

	})();

})();
