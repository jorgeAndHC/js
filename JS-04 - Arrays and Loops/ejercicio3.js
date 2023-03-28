

/* -----------------------------Parte 1------------------------------ */
let xValue = 10;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

/* -----------------------------Parte 2------------------------------ */
 // para no declarar tantas variables lo pongo aqui
 let cont=1;
console.log("********Parte 2*********");
for ( cont = 1; cont < 50; cont+=1){
    console.log((cont*2)-1); 
}//for cont
/* -----------------------------Parte 3------------------------------ */

console.log("************ Parte 3 WHILE ************");
const numero = 6;
let num = 1;

while (num <= numero) {
  console.log(`[${num}]`);
  num++;
}


/* -----------------------------Parte 4------------------------------ */
console.log("************ Parte 4 WHILE ************");
let sumadeNumeros = 0;
let numeroSuma = 19;
let num1 = 1;

while (num1 <= numeroSuma) {
  sumadeNumeros += num1;
  num1++;
}


console.log(sumadeNumeros);