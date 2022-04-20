const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        // if (!menu.style.transform) {
        //     menu.style.transform = `translateX(0)`;
        //     menu.style.transition = `all 4.3s`;
        // } else {
        //     menu.style.transform = ``;
        //     menu.style.transition = `all 3.3s`;
        // }
        menu.classList.toggle('active-menu');
    };
    
    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
};
export default menu;