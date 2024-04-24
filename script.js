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