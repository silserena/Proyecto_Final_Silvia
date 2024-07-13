/**PARALLAX */

let title = document.querySelector('h1')
let imagen = document.querySelector('img')

window.addEventListener('scroll', () =>{

    
    let scroll = window.pageYOffset
    let speed = 0.3

    title.style.transform = 'translateY('+scroll * speed+'px)'

})

/**APPEAR MW*/

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