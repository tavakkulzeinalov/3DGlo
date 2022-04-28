import {
	animate
} from './helpers';

const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const modalContent = modal.querySelector('.popup-content');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			if (window.innerWidth > 768) {
				modal.style.display = 'block';
				modalContent.style.transform = 'translateX(100px)';

				animate({
					duration: 500,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modalContent.style.opacity = progress;
					}
				});
			} else {
				modal.style.display = 'block';
			}
		});
	});

	modal.addEventListener('click', e => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			if (window.innerWidth > 768) {
				animate({
					duration: 300,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modalContent.style.opacity = 1 - progress;
					}
				});
			} else {
				modal.style.display = 'none';
			}
			setTimeout(() => {
				modal.style.display = 'none';
			}, 300);
		}
	});
};

export default modal;