let amigos = [];
let nombreDeAmigo = document.getElementById("amigo").value;
let listado = document.getElementById("listaAmigos");
let amigoSecreto = document.getElementById("resultado");

function agregarAmigo() {
    //Obtenemos el nombre del amigo desde el campo de texto;
    let nombreDeAmigo = document.getElementById("amigo").value;
    if (nombreDeAmigo === "") {
        //Si el valor obtenido desde el campo de texto es 'vacío', lanza un alerta;
        alert("ERROR. Ingrese un nombre válido");
        return;
    } else {
        //Si el valor obtenido es válido lo agrega a la lista 'amigos' y a 'listaAmigos()';
        amigos.push(nombreDeAmigo);
        listaAmigos();
        document.querySelector("#amigo").value = "";
    }
    return;
}