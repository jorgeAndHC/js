/*
Personas
+-----------+
| SOfia     |0
+-----------+
|   David   |1
+-----------+
| Juan      |2
+-----------+
*/ 
// ----------------------Parte 1-----------------------------------
let P_en_Fila=["Sofía", "David","Juan"];

console.log(P_en_Fila.length); 
let divAlert = document.getElementById("divAlert")

// ----------------------Parte 2-----------------------------------------
P_en_Fila.push("Sara","Agustin"); // el push pone a Sara y agustin al final de la fila
P_en_Fila.shift();


// ------------------------Parte 3------------------------------------
P_en_Fila.splice(1,0, "Renata");
P_en_Fila.push("Elena");
P_en_Fila.shift();


divAlert.innerHTML = P_en_Fila.length + " Personas";

divAlert.innerHTML += "<ol><li>" +P_en_Fila[0]+ "</li>"  
+ "<li>" +P_en_Fila[1]+ "</li>"  
+ "<li>" +P_en_Fila[2]+ "</li>" 
+ "<li>" +P_en_Fila[3]+ "</li>"  
+ "<li>" +P_en_Fila[4]+ "</li> </ol>";
