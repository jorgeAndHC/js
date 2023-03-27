/*
Personas en el Banco
+---------------------------+
| Sofía                     |0
+---------------------------+
|   David                   |1
+---------------------------+
|     Juan                  |2
+---------------------------+
*/ 
 let bancoPersonas=["Sofía","David","Juan"];

console.log(bancoPersonas.length); // Da el número 2 en la consola
let divAlert = document.getElementById("divAlert")
/

bancoPersonas.push("sara"); // el push pone el elemento al final de la fila

// console.log(libros.shift()); //lo quita y lo manda hasta abajo 



divAlert.innerHTML = bancoPersonas.length + "Personas";

divAlert.innerHTML += "<ol><li>" + bancoPersonas[0]+ "</li>"   
+ "<li>" +bancoPersonas[1]+ "</li>" 
+ "<li>" +bancoPersonas[2]+ "</li> </ol>";
// se concateno todo dentro el primer divAlert para que agarre el ol
