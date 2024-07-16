/** appear */
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

// slider
let imagenes = document.querySelectorAll('.slider__img') 
let slider = document.querySelector('.slider') 
let index = 0 



// - Funciones

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

//Parallax

let title = document.querySelector('h1')
let image = document.querySelector('img')

window.addEventListener('scroll', () =>{

    
    let scroll = window.pageYOffset
    let speed = 0.3

    title.style.transform = 'translateY('+scroll * speed+'px)'

})

/** menu hamburguesa */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
