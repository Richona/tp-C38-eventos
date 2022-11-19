window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /* En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.
 */
    titulo.addEventListener("mouseover", () => {
        titulo.classList.toggle("botonBorrar")
    })
    titulo.addEventListener("mouseout", () => {
        titulo.classList.toggle("botonBorrar")
    })

}