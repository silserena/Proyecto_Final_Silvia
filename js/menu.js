/** Menu hamburguesa - responsive */

(function(){
    // variables declaradas
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    // funcion de addeventlistener para que al hacer click se abra el menu
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

        // funcion de addeventlistener para que al hacer click se cierre el menu
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();