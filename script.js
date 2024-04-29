// Con esta función logramos que los botones laterales (las flechas) abran sus correspondientes divs y cierren el contrario.
function abrirSeccion(seccion) {
    // asignamos las dos variables para trabajar con ellas, secciones y botones, en estas secciones indicamos el id del elemento html.
    let secciones = document.querySelectorAll('.seccion');
    let botones = document.querySelectorAll('.boton');
    // La siguiente linea recorre todas las secciones y se elimina la clase "abierto", ya que puede dar algún error al dejarlas abiertas...
    secciones.forEach(s => s.classList.remove('abierto'));
    // Esta linea encotnramos que la sección que vayamos a abrir al darle click al botón reciba la clase abierto para que coja sus valores.
    document.getElementById(seccion).classList.add('abierto');
}
// Esta función sirve para que los botones puedan cerrar las secciones, es como el otro pero al contrario
function cerrarSeccion(seccion) {
    // Definimos las variables...
    let secciones = document.querySelectorAll('.seccion');
    let botonescerrar = document.querySelectorAll('.botoncerrar')
    // Eliminamos la clase abierto de la sección correspondiente
    document.getElementById(seccion).classList.remove('abierto')
}
// Declaramos esta funcion para que cuando la llamemos los a del nav funcionen como los botones
function manejarEnlaces(){
    // Esta linea selecciona todos los a del elemento navegador
    document.querySelectorAll('#navegador a').forEach(enlace => {
        enlace.addEventListener('click', function(event){
            // Cogemos el valor del atributo data-seccion del enlace clickeado y se guarda en seccion
            let seccion = this.getAttribute('data-seccion');
            // Ejecutamos la funcion abrir seccion para abrir la sección corerespondiente
            abrirSeccion(seccion);
        })
    })
}
// Llamamos a la función anterior para que funcione
document.addEventListener('DOMContentLoaded', function() {
    manejarEnlaces();
});