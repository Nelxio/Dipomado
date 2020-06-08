function convertidor(){

let a = prompt("Introduce el numero decimal");
let resultado = parseInt(a).toString(8);
let resultado1 = parseInt(a).toString(16);
let resultado2 = parseInt(a).toString(2);

var resultados = {octal: resultado, hexadecimal: resultado1, binario: resultado2, decimal: a}

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(a);

console.table(resultados);
sino = prompt("Quieres convertir otro numero si/no?");
while(sino =="si"){
    let a = prompt("Introduce el numero decimal");
let resultado = parseInt(a).toString(8);
let resultado1 = parseInt(a).toString(16);
let resultado2 = parseInt(a).toString(2);

var resultados = {octal: resultado, hexadecimal: resultado1, binario: resultado2, decimal: a}

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(a);

console.table(resultados);
sino = prompt("Quieres convertir otro numero si/no?");
}

}