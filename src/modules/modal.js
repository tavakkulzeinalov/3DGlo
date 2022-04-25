const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const modalContent = modal.querySelector('.popup-content');

	let count = 0;
	let idInterval;
	let isOpen = false;

	const modalAnimation = () => {
		if (window.innerWidth > 768) {
			if (isOpen) {
				count++;
				modal.style.display = 'block';
				idInterval = requestAnimationFrame(modalAnimation);
				if (count <= 100) {
					modalContent.style.opacity = count * 4 + '%';
				} else {
					cancelAnimationFrame(idInterval);
					count = 100;
				}
				modalContent.style.transform = 'translateX(100px)';
			} else {
				count -= 4;
				idInterval = requestAnimationFrame(modalAnimation);
				if (count >= 0) {
					modalContent.style.opacity = count / 2 + '%';
				} else {
					cancelAnimationFrame(idInterval);
					modal.style.display = 'none';
					count = 0;
				}
			}
		} else {
			modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
		}
	};

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			isOpen = !isOpen;
			modalAnimation();
		});
	});

	modal.addEventListener('click', e => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			isOpen = !isOpen;
			modalAnimation();
		}
	});
};

export default modal;
