


var txt = prompt("ingresar lectura");
var tiempo = prompt("Ingresa el tiempo en segundos.");
var milisegundos = parseInt(tiempo) * 1000;
var cadena = txt.split(' ');
var i = 0;


function palabra() {
    if (i < cadena.length) {
        setTimeout(limpiar, milisegundos);
    }
    let letra = cadena[i];
    let tamaño = cadena[i].length - 1;
    tamaño = tamaño / 2;

    let x = Math.floor(tamaño);

    console.log(letra.substring(0, x) + "%c" + letra.substr(x, 1) + "%c" + letra.substring(x + 1, 100), "color :red", "color: black");
    i++;
    if (i < cadena.length) {
        setTimeout(palabra, milisegundos);
    } else {
        console.log("lectura terminada");
    }
}

function limpiar() {
    console.clear();
}

palabra();

