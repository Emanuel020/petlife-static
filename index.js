var elementosDuvida = document.querySelectorAll('.duvida')

/*elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
});*/

elementosDuvida.forEach((duvida) => {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})