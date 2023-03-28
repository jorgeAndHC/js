let Ciclo=["*","**","***",
"****","*****"];

let index=0;
for(index=0; index>Ciclo.length; index++ ){
 console.log(Ciclo[index]); 
 index++;  
}
index=0

    while( index<Ciclo.length  ){
console.log(Ciclo[index]);
index++;
}
divAlert.innerHTML += "<ol><li>" +Ciclo[0]+ "</li>"  
+ "<li>" +Ciclo[1]+ "</li>"  
+ "<li>" +Ciclo[2]+ "</li>" 
+ "<li>" +Ciclo[3]+ "</li>"  
+ "<li>" +Ciclo[4]+ "</li> </ol>";
