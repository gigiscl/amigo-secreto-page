// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaAmigos = [];

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
}