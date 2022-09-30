const seleccion = document.getElementById('select')
const botonComprar = document.getElementById("pedir");
const Modal = document.getElementById("Modal");
const cancelar = document.getElementById("cancelar");
const comprar = document.getElementById("comprar");
const seleccionado = document.getElementById("productoEsco");

botonComprar.addEventListener("click", ()=> {

   if(seleccion.options[seleccion.selectedIndex].value==="0"){
        alert("primero elije un producto")
    }else {
        Modal.style.top = "0px";
        seleccionado.textContent = (seleccion.options[seleccion.selectedIndex].text)
    }
})

cancelar.addEventListener("click", ()=> {

    Modal.style.top = "-1200px";

});
comprar.addEventListener("click", ()=> {

    setTimeout(()=> {
        location = "./comprado.html";},1000);
});

