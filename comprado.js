const boton = document.getElementById("Boton");
boton.addEventListener("click", salir)

function salir() {
    setTimeout(()=> {
        location = "./Nosotros.html";});
}