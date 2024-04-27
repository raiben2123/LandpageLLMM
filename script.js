function abrirSeccion(seccion) {
    // asignamos las variables para trabajar con ellas
    let secciones = document.querySelectorAll('.seccion');
    let botones = document.querySelectorAll('.boton');
    secciones.forEach(s => s.classList.remove('abierto'));
    document.getElementById(seccion).classList.add('abierto');
}
function cerrarSeccion(seccion) {
    let secciones = document.querySelectorAll('.seccion');
    let botonescerrar = document.querySelectorAll('.botoncerrar')
    document.getElementById(seccion).classList.remove('abierto')
}
function manejarEnlaces(){
    document.querySelectorAll('#navegador a').forEach(enlace => {
        enlace.addEventListener('click', function(event){
            // event.preventDefault();

            let seccion = this.getAttribute('data-seccion');

            abrirSeccion(seccion);
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    manejarEnlaces();
});