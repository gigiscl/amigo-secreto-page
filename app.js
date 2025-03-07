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
    alert(listaAmigos);

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