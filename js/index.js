/** -----------appear--------------- */
//variable declarada
let appearElement = document.querySelectorAll('.appear')

window.addEventListener('scroll', () =>{
    appearElement.forEach( (appear) =>{
        if (appear.getBoundingClientRect().top < window.innerHeight - 150 ) {
            appear.style.opacity = '1'  
           
        } else {
            appear.removeAttribute('style')
        }
    } )

})

/** ------------slider---------- */

//variables declaradas
let imagenes = document.querySelectorAll('.slider__img') 
let slider = document.querySelector('.slider') 
let index = 0 



// - Funciones del slider

setInterval (() => {
    if (index < imagenes.length - 1) {
        index++ 
        let calculate = index *-100
        slider.style.transform = `translateX(${calculate}vw)`
    } else if (index == imagenes.length-1) {
            index = 0//
            let calculate = index *-100
            slider.style.transform = `translateX(${calculate}vw)`
         
        }


}, 5000);

/** ------------Parallax--------- */

//variables declaradas
let title = document.querySelector('h1')
let image = document.querySelector('img')

window.addEventListener('scroll', () =>{

    
    let scroll = window.pageYOffset
    let speed = 0.3

    title.style.transform = 'translateY('+scroll * speed+'px)'

})

/** -------------menu hamburguesa---------- */

//variables declaradas para que afecte a las ID
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


// les añadimos un addeventlistener para que al hacer click encima del icono se haga visible el nav
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

// les añadimos un addeventlistener para que al hacer click encima del icono se cierre el nav
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
