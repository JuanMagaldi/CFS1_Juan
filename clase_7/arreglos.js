"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantidadNumeros = readlineSync.questionInt("Cuantos datos quiere ingresar? ");
var num = new Array(cantidadNumeros);
var numerosNegativos = 0;
var numerosPositivos = 0;
var cero = 0;
var i;
for (i = 0; i < cantidadNumeros; i++) {
    num[i] = readlineSync.questionInt("ingrese un numero:");
}
for (i = 0; i < cantidadNumeros; i++) {
    console.log("numero ingresado en la posicion", i, ":");
    console.log(num[i]);
    if (num[i] == 0) {
        cero++;
    }
    else if (num[i] > 0) {
        numerosPositivos++;
    }
    else
        numerosNegativos++;
}
console.log("hay :", numerosNegativos, "numeros negativos");
console.log("hay :", numerosPositivos, "numeros positivos");
console.log("hay :", cero, "numeros cero");
