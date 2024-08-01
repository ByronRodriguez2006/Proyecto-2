

const nombre = document.getElementById("nombre")
const Apellidos = document.getElementById("Apellidos")
const email = document.getElementById("email")
const contra = document.getElementById("contra")
const registrarse = document.getElementById("registrarse")

 const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]


registrarse.addEventListener("click", function () {

    let usuario ={
        nombre: nombre.value, 
        Apellidos: Apellidos.value,
        email: email.value,
        contra: contra.value
     

    }

    listaUsuarios.push(usuario)
     console.log(listaUsuarios)


     localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))

     window.location.href="login.html"


     
    



    
})