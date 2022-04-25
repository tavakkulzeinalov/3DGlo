const menu = () => {
	const menu = document.querySelector('menu');

	const handleMenu = () => {
		menu.classList.toggle('active-menu');
	};
	document.body.addEventListener('click', e => {
		if (e.target.closest('.menu') || e.target.matches('menu a')) {
			handleMenu();
		} else if (!e.target.closest('menu')) {
			if (menu.classList.contains('active-menu')) {
				handleMenu();
			}
		}
	});
};

export default menu;