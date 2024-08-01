

const text = document.getElementById("text")
const fecha = document.getElementById("fecha")
const guardar = document.getElementById("guardar")
const selector = document.getElementById("selector")
const Eventos = document.getElementById("Eventos")


const Tarea = document.getElementById("Tarea")
const Evento = document.getElementById("Evento")

let listaTareas = JSON.parse(localStorage.getItem("listaTareas"))||[]
let listaEventos = JSON.parse(localStorage.getItem("listaEventos"))||[]

guardar.addEventListener("click", function () {


   if (selector.value==="Tareas") {

      listaTareas.push(text.value + " " + fecha.value)

      localStorage.setItem("listaTareas",JSON.stringify(listaTareas)||[])
      
      const eti = document.createElement("p")
      const btneliminar =document.createElement("button")
      const btnguardar = document.createElement("button")
      const bnteditar = document.createElement("button")
      const div = document.createElement("div")
      const editinput = document.createElement("input")
   
      eti.innerHTML= text.value
   
      btneliminar.innerText= "Eliminar"
      bnteditar.innerText= "Editar"
      btnguardar.innerText="Guardar"
   
      eti.innerText= text.value + " " + fecha.value
     
      div.appendChild(eti)
      div.appendChild(btneliminar)
      div.appendChild(bnteditar)
   
   
    
      Tarea.appendChild(div)
      
   
      btneliminar.addEventListener("click",function () {
   
       div.remove()
   
      })
     
   
      bnteditar.addEventListener("click", function () {
   
       div.appendChild(btnguardar)
       div.appendChild(editinput)
   
   
   
       
      })
   
       btnguardar.addEventListener("click",function () {
   
       eti.innerText = editinput.value
       
      })

   }else{

      if (selector.value=== "Eventos") {

         
      listaEventos.push(text.value + " " + fecha.value)

      localStorage.setItem("listaEventos",JSON.stringify(listaEventos)||[])
      


         const eti2 = document.createElement("p")
      const btneliminar2 =document.createElement("button")
      const btnguardar2 = document.createElement("button")
      const bnteditar2 = document.createElement("button")
      const div2 = document.createElement("div")
      const editinput2 = document.createElement("input")
   
      eti2.innerHTML= text.value
   
      btneliminar2.innerText= "Eliminar"
      bnteditar2.innerText= "Editar"
      btnguardar2.innerText="Guardar"
   
      eti2.innerText= text.value + " " + fecha.value
     
      div2.appendChild(eti2)
      div2.appendChild(btneliminar2)
      div2.appendChild(bnteditar2)
   
   
    
      Evento.appendChild(div2)
      
   
      btneliminar2.addEventListener("click",function () {
   
       div2.remove()

       

   
      })
     
   
      bnteditar2.addEventListener("click", function () {
   
       div2.appendChild(btnguardar2)
       div2.appendChild(editinput2)
   
   
   
       
      })
   
       btnguardar2.addEventListener("click",function () {
   
       eti2.innerText = editinput2.value
       
       
       
      })

         
      }
   }

})




function save() {
   
   let validacion = JSON.parse(localStorage.getItem("listaTareas"))||[]


for (let index = 0; index < validacion.length; index++) {

      const eti3 = document.createElement("p")
      const btneliminar3 =document.createElement("button")
      const btnguardar3 = document.createElement("button")
      const bnteditar3 = document.createElement("button")
      const div3 = document.createElement("div")
      const editinput3 = document.createElement("input")
   
      eti3.innerHTML= validacion[index];
   
      btneliminar3.innerText= "Eliminar"
      bnteditar3.innerText= "Editar"
      btnguardar3.innerText="Guardar"
     
      div3.appendChild(eti3)
      div3.appendChild(btneliminar3)
      div3.appendChild(bnteditar3)
   
   
    
      Tarea.appendChild(div3)
      
   
      btneliminar3.addEventListener("click",function () {
   
       

       let val = JSON.parse(localStorage.getItem("listaTareas"))||[]
       let val2 = val.filter(tarea => tarea != eti3.textContent)
       localStorage.setItem("listaTareas",JSON.stringify(val2))

       div3.remove()
   
      })
     
   
      bnteditar3.addEventListener("click", function () {
   
       div3.appendChild(btnguardar3)
       div3.appendChild(editinput3)
   
   
   
       
      })
   
       btnguardar3.addEventListener("click",function () {
   
       eti3.innerText = editinput3.value
       

      
      
      })
      
      

   
}
}

save()



  


  






















