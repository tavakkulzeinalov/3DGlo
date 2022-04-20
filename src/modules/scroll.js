const scroll = () => {
	const menuItems = document.querySelectorAll('ul>li>a');
	const scrollBtn = document.querySelector('main>a');

	const allLinks = [...menuItems, scrollBtn];

	allLinks.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();

			const id = link.getAttribute('href').substring(1);
			const section = document.getElementById(id);

			if (section) {
				section.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "center",
				});
			}
		});
	});
};

export default scroll;