// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaAmigos = [];


function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let pos = 0;
    while(pos < listaAmigos.length){
        lista.innerHTML += "<li>" + listaAmigos[pos] + "</li>";
        pos++;
    }    
}

function agregarALista(amigo){
    listaAmigos.push(amigo);
}

function validarAmigo(amigo) {
    if (amigo != ""){
        agregarALista(amigo);
    }
    
}

function limpiarCampo(etiqueta) {
    let campo = document.getElementById(etiqueta);
    campo.value = "";
    campo.focus();
}


function agregarAmigo() {
    let amigoUsuario = document.getElementById("amigo").value;
    validarAmigo(amigoUsuario);
    limpiarCampo("amigo");
    mostrarAmigos();
}

function mostrarResultado(pos) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    lista.innerHTML += "<li>" + "Tu amigo secreto es: "+ listaAmigos[pos] + "</li>";
}

function noTenesAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    lista.innerHTML += "<li>No hay amigos para sortear</li>";    
    
}
function sortearAmigo() {
    //Validar que hay amigos

    //Generar indice aleatorio
    if(listaAmigos.length != 0){
        let indice = Math.floor(Math.random()*listaAmigos.length)

        mostrarResultado(indice);
    }else{
        noTenesAmigos();
    }
}