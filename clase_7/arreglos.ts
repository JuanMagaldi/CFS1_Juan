import * as readlineSync from "readline-sync";


let cantidadNumeros: number = readlineSync.questionInt("Cuantos datos quiere ingresar? ");
let  num: number[] = new Array(cantidadNumeros);
let  numerosNegativos: number = 0;
let  numerosPositivos: number = 0;
let  cero : number = 0;
let i;

for(i = 0; i < cantidadNumeros;i ++ ){
    
    num[i] = readlineSync.questionInt("ingrese un numero:");
}

for(i = 0; i < cantidadNumeros;i ++ ){
    console.log("numero ingresado en la posicion", i,":");
    console.log(num[i]);

if(num[i] == 0){
    cero ++;
}
else if (num[i] > 0) {
    numerosPositivos ++;
}
else
    numerosNegativos ++;
}
console.log("hay :", numerosNegativos, "numeros negativos");
console.log("hay :", numerosPositivos, "numeros positivos");
console.log("hay :", cero, "numeros cero");