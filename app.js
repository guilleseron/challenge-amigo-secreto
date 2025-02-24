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

function listaAmigos() {
    //Inicia limpiando el elemento de HTML para evitar duplicados de ejecuciones anteriores;
    listado.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) { //Si el ingreso es válido agrega el nombre al listado que se encuentra debajo de el campo de ingreso de texto;
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listado.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    //Inicia limpiando el elemento de HTML para evitar duplicados o resultados de ejecuciones anteriores;
amigoSecreto.innerHTML = "";
if (amigos.length <= 0) { //Si la lista de nombres de amigos está vacía, lanza un alerta;
    alert("ERROR. El sorteo no puede comenzar si no ingresa nombres");
    return;
} else {
    //Genera un número aleatorio que no puede ser mayor a la cantidad de nombres válidos ingresados;
    let numeroAmigo = Math.floor(Math.random()*amigos.length);
    //Muestra el nombre del amigo en la posición aleatoria de la lista 'amigos' determinada anteriormente;
    amigoSecreto.innerHTML = `Su amigo secreto es ${amigos[numeroAmigo]}`;
    return;
}
}
