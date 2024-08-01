
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const login = document.getElementById("login")

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]

login.addEventListener("click", function () {


    console.log(listaUsuarios);

   for (let index = 0; index < listaUsuarios.length; index++) {

    if (listaUsuarios[index].email == correo.value ) {

        ("Puedes entrar al Sistema")
        
    }else{
        ("No pudes entrar al sistema")
  
    }
    
    
   }
    
   
    
})