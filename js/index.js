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
