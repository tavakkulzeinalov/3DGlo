export const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById((formId));
    const loaderAnimation = document.createElement('div');
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется';
    const validate = (list) => {
        let success = true;
        if (list) {
            list.forEach(input => {
                if (input.name === 'user_name') {
                    if (/[^а-яА-Я-\s]/g.test(input.value)) {
                        success = false;
                    }
                } else if (input.name === 'user_phone') {
                    if (/[^0-9\-\(\)\+]/g.test(input.value)) {
                        success = false;
                    }
                } else if (input.name === 'user_message') {
                    if (/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(input.value)) {
                        success = false;
                    }
                }
            });
        }
        return success;
    };
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };
    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};
        loaderAnimation.className = 'lds-circle';
        let temp = ``;
        for (let i = 1; i <= 1; i++) {
            temp += `		
			<div class="lds-circle-${i}"><div></div></div>	
		`;
        }
        loaderAnimation.innerHTML = temp;
        form.append(loaderAnimation);
        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    loaderAnimation.classList.remove('lds-circle');
                    loaderAnimation.innerHTML = `<img src="images/icons/success-svgrepo-com.svg" width='20px;'/> ${successText}`;
                    formElements.forEach(input => {
                        input.value = '';
                    });
                }).catch(error => {
                    loaderAnimation.innerHTML = '';
                    loaderAnimation.innerHTML = `<img src="images/icons/error-close-svgrepo-com.svg" width='30px;'/> ${errorText}`;
                });
        } else {
            loaderAnimation.classList.remove('lds-circle');
            loaderAnimation.innerHTML = '';
            loaderAnimation.innerHTML = `<img src="images/icons/error-close-svgrepo-com.svg" width='30px;'/> ${errorText}`;
        }
    };
    try {
        if (!form) {
            throw new Error('Верните форму, пожалуйста');
        }
        form.addEventListener('submit', e => {
            e.preventDefault();
            submitForm();
        });
    } catch (err) {
        console.log(err.message);
    }
};