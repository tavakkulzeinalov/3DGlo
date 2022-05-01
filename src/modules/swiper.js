import Swiper, {
    Autoplay
} from "swiper";
export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        modules: [Autoplay],
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
};