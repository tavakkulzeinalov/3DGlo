export const validation = () => {
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	const calcInputs = [calcSquare, calcCount, calcDay];

	const mess = document.querySelector('.mess');
	let inputsName = [];
	let inputsEmail = [];
	let inputsPhone = [];

	for (let i = 1; i <= 3; i++) {
		inputsName.push(document.getElementById(`form${i}-name`));
		inputsEmail.push(document.getElementById(`form${i}-email`));
		inputsPhone.push(document.getElementById(`form${i}-phone`));
	}
	const changeStr = (e, reg) => {
		if (e.target.value) {
			let str = e.target.value
			str = str.replace(reg, "");
			str = str.replace(/\s{2,}/g, ' ');
			str = str.replace(/-{2,}/g, '-');
			str = str.trim();
			str = str.replace(/^-|-$/g, '');
			str = str.trim();

			if (e.target.type === 'text') {
				str = str[0].toUpperCase() + str.substr(1).toLowerCase();
			}
			e.target.value = str;
		}
	};

	mess.addEventListener('blur', (e) => {
		changeStr(e, /[^а-яА-Я-\s]+/g);
		///[^а-яА-Я\-\s]+/
	});

	inputsName.forEach(input => {
		input.addEventListener('blur', e => {
			changeStr(e, /[^а-яА-Я\-\s]+/g);
		});
	});

	inputsEmail.forEach(input => {
		input.addEventListener('blur', e => {
			changeStr(e, /[^a-zA-Z0-9\@\-\_\.\!\~\*\']+/g);
		});
	});

	inputsPhone.forEach(input => {
		input.addEventListener('blur', e => {
			changeStr(e, /[^0-9\-\(\)]/g);
		});
	});
	calcInputs.forEach(input => {
		input.addEventListener('input', e => {
			e.target.value = e.target.value.replace(/\D+/, "");
		});
	});
};