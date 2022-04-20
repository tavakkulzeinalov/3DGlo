const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
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
                if (count <= 20) {
                    modalContent.style.left = count + '%';
                    modalContent.style.top = count * 1 + '%';
                } else if (count <= 30) {
                    modalContent.style.left = count + '%';
                } else {
                    cancelAnimationFrame(idInterval);
                    count = 20;
                }
                modalContent.style.transform = 'translateX(100px)';
            } else {
                count++;
                idInterval = requestAnimationFrame(modalAnimation);
                if (count <= 50) {
                    modalContent.style.left = count * 2 + '%';
                    modalContent.style.top = count * 2 + '%';
                } else {
                    cancelAnimationFrame(idInterval);
                    modal.style.display = 'none';
                    modalContent.style.left = 0;
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
    closeBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        modalAnimation();
    });
};

export default modal;