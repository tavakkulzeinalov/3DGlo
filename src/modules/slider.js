export const slider = (sliderBlockClassName, slideClassName, activeSlideClassName = 'slide-active', dotClassName, dotActiveClassName = 'dot-active', buttonClassName) => {
    const sliderBlock = document.querySelector(`.${sliderBlockClassName}`);
    if (!sliderBlock) {
        return;
    }

    const slides = document.querySelectorAll(`.${slideClassName}`);
    if (slides.length === 0) {
        return;
    }

    let dots;
    const timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    const newDots = () => {
        const ul = document.createElement('ul');
        ul.classList.add('portfolio-dots');

        for (let i = 0; i < slides.length; i++) {
            const li = document.createElement('li');
            li.classList.add(dotClassName);

            if (i === 0) {
                li.classList.add(dotActiveClassName);
            }
            ul.append(li);
        }
        sliderBlock.append(ul);
    };

    const getNewDots = () => {
        return document.querySelectorAll(`.${dotClassName}`);
    };

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlideClassName);
        prevSlide(dots, currentSlide, dotActiveClassName);

        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, activeSlideClassName);
        nextSlide(dots, currentSlide, dotActiveClassName);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', e => {
        e.preventDefault();

        if (!e.target.matches(`.${dotClassName}, .${buttonClassName}`)) {
            return;
        }

        prevSlide(slides, currentSlide, activeSlideClassName);
        prevSlide(dots, currentSlide, dotActiveClassName);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains(dotClassName)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, activeSlideClassName);
        nextSlide(dots, currentSlide, dotActiveClassName);
    });

    sliderBlock.addEventListener('mouseenter', e => {
        if (e.target.matches(`.${dotClassName}, .${buttonClassName}`)) {
            stopSlide(timeInterval);
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', e => {
        if (e.target.matches(`.${dotClassName}, .${buttonClassName}`)) {
            startSlide();
        }
    }, true);

    newDots();
    dots = getNewDots();
    startSlide(timeInterval);
};