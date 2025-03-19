let amigo = [];
let mensaje = document.getElementById("mensaje");

function agregarAmigo() {
    let opcionAmigos = document.getElementById("amigo");
    let nombreAmigo = opcionAmigos.value;
    

    if (!nombreAmigo) {
        mensaje.textContent = "Debes agregar al menos un amigo";
        return;
    }
    
    amigo.push(nombreAmigo);
    console.log(amigo);
    opcionAmigos.value = "";
    opcionAmigos.focus();
    mensaje.textContent = `Añadiste a: ${amigo.join(", ")}`;
};



function sortearAmigo() {
    let mensajes = document.getElementById("mensaje");
    for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].textContent = "Debes agregar al menos un amigo";
        }
    
    
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `🎉El amigo secreto es ${amigoSorteado}🎁`
    ocultarElementos();
}

function ocultarElementos() //con esta funcion se oculta el boton de sorteo y la caja de texto, reemplazando por el boton de reinicio
{
    document.getElementById("amigo").style.display = "none"; 
    document.querySelector(".button-add").style.display = "none"; // Ocultar el botón "Añadir"
    document.getElementById("botonSortear").style.display = "none"; 
    document.getElementById("botonReiniciar").style.display = "block"; 
}

function reiniciarSorteo() {
    amigo = []; // Vacía la lista de amigos
    document.getElementById("mensaje").textContent = "Escribe los nombres de tus amigos";
    document.getElementById("resultado").textContent = "";
    
    // Restaurar elementos ocultos
    document.getElementById("amigo").style.display = "inline-block";//restaura la caja de texto
    document.querySelector(".button-add").style.display = "inline-block"; //restaura el boton de añadir
    document.getElementById("botonSortear").style.display = "inline-block";//resdtaura el boton de sortear
    document.getElementById("botonReiniciar").style.display = "none"; // Oculta el botón de reinicio
}