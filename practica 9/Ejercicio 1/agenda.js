
var contactos = new Array();

function nuevoContacto() {
    nombre = prompt('Nombre');
    telefono = prompt('Número de telefono');
    correo = prompt('Correo electronico');
    direccion = prompt('Dirección');

    contactos[contactos.length] = new Array(nombre, telefono, correo, direccion);

}

function verContactos() {

    document.getElementById('menu').style.display = "block"

    destino = document.getElementById("divDestino");
    contenido = "";

    for (x = 0; x < contactos.length; x++) {
        nombre = contactos[x][0];
        telefono = contactos[x][1];
        correo = contactos[x][2];
        direccion = contactos[x][3];

        contenido = contenido + "<tr> <td>" + nombre + "</td><td>" + telefono + "</td><td>" + correo + "</td><td>" + direccion + "</td> </tr>"
    }

    if (contenido == "") {
        mensaje = "<tr> no hay datos registrados</tr>"
        destino.innerHTML = mensaje


    } else {

        destino.innerHTML = contenido;

    }


}

function menu() {

    document.getElementById('menu').style.display = "none"
    document.getElementById('menu2').style.display = "none"
}

function viewsArrayInput() {
    document.getElementById('menu2').style.display = "block"
    destino = document.getElementById("divDestino2");
    contenido = "";

    mensaje = "<tr> no hay datos registrados</tr>"
    var buscar = document.getElementById('buscador').value

     contactos.forEach(nume =>{

         if(buscar == nume[0]){
            contenido = contenido + "<tr> <td>" + nume[0] + "</td><td>" + nume[1] + "</td><td>" + nume[2] + "</td><td>" + nume[3] + "</td> </tr>"
            destino.innerHTML = contenido;
         }else{
            destino.innerHTML = contenido; 
         } 
     });
       
     
    
}
