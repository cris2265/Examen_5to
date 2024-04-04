import { lista_de_componentes } from "./Data.js";

let root = document.querySelector(".root")

lista_de_componentes.forEach(cada_div => {
    let div = document.createElement ("div")
    div.classList.add("cuadro")

    div.innerHTML = `
        <h3 class="titulo">${cada_div.nombre}</h3>
        <span class="texto">${cada_div.descripcion}</span>
        <div class="boton">Boton</div>
    `
    root.appendChild(div)
});



let boton = document.querySelector(".boton")

boton.addEventListener("click", ()=>{
    let cuadro = document.querySelector(".cuadro")

    cuadro.classList.add("bordes")
    
})




console.log(lista_de_componentes);
