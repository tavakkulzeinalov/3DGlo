export const menu = () => {
	const menu = document.querySelector('menu');

	const handleMenu = () => {
		menu.classList.toggle('active-menu');
	};
	document.body.addEventListener('click', e => {
		if (e.target.closest('.menu')) {
			handleMenu();
		} else if (e.target.matches('menu a')) {
			e.preventDefault();
			handleMenu();
		} else if (e.target.closest('main>a')) {
			e.preventDefault();
		} else if (!e.target.closest('menu')) {
			if (menu.classList.contains('active-menu')) {
				handleMenu();
			}
		}
	});
};