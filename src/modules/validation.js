const validation = () => {
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

    mess.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
    });

    inputsName.forEach(input => {
        input.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
        });
    });

    inputsEmail.forEach(input => {
        input.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']+/, "");
        });
    });

    inputsPhone.forEach(input => {
        input.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^0-9\-\(\)]/, "");
        });
    });

    calcInputs.forEach(input => {
        input.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });


};

export default validation;