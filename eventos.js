function CargarEvento(){
    const div = document.querySelector("div")
    
    div.addEventListener("click", SaludoDiv);
}

function SaludoDiv(){
    return alert ("Hola, soy el Div");
}

 document.addEventListener("DOMContentLoaded", CargarEvento);

 //document.onclick().