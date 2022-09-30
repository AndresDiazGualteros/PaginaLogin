const boton = document.getElementById("Ingresar")
boton.addEventListener("click", e=>{
    
    e.preventDefault()

    const usuario = document.getElementById("usuario").value

    const contraseña = document.getElementById("contraseña").value

    if(usuario===""|| 
    contraseña===""){
        alert("no se ha indicado el usuario o contraseña")
    }
    
    
    if(usuario==="carlitos" && contraseña==="carlitos123"){
        alert("Bienvenido")
        setTimeout(()=>{
            location = "./Nosotros.html"
        },1000)
    }else{
        document.querySelector("#mensaje").style.display="block"
    }
})

document.getElementById("contraseña").addEventListener("mouseenter", mostrar)

function mostrar() {
    document.getElementById("contraseña").type="text"

}

document.getElementById("contraseña").addEventListener("mouseleave", ocultar)


function ocultar() {
    document.getElementById("contraseña").type="password"

}

document.getElementById("caja").addEventListener("change", function(e){
    if(e.target.checked==true){
    alert("desea que recordemos los datos")
}
})



