/** -----------appear mw--------------- */
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
