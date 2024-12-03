/**-----Appear---------
 * me gustaba la idea de que fuese apareciendo todo poco a poco, segun vas haciendo scroll en la web. Me parece que queda muy bonito
 * 
*/
let appearElement = document.querySelectorAll('.appear') // declaracion de la variable

window.addEventListener('scroll', () =>{ // función arrow

   
    appearElement.forEach( (appear) =>{
        if (appear.getBoundingClientRect().top < window.innerHeight - 150 ) {
            appear.style.opacity = '1'  
           
        } else {
            appear.removeAttribute('style')
        }
    } )

})
