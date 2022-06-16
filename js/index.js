

//Pide una nota (número). Muestra la calificación según la nota

let nota = prompt("Ingresa tu nota: ");
if (nota > 0 && nota <= 10) {
 if (nota < 3){ 
  alert("Tu nonta es: " +" Deficiente " +  nota);
  } else if (nota < 5){
    alert("Tu nota es: " +"Insuficiente " +  nota );
  } else if (nota < 6){ 
    alert("Tu nota es: " + "Insuficiente " +  nota);
  } else if (nota < 7){
    alert("Tu nota es: " +"Aprobado "  +  nota);
  } else if (nota < 8){
    alert("Tu nota es: " +"Bueno " +  nota );
  } else if (nota < 9){
    alert("Tu nota es: " +"Muy Bueno " +  nota);
  } else if (nota >= 9){
    alert("Tu nota es: " +"SOBRESALIENTE!! " +  nota);
  }
}
nota = prompt("Ingresa una nueva nota")
if (nota > 0 && nota <= 10) {
  if (nota < 3){ 
   alert("Tu nonta es: " +" Deficiente " +  nota);
   } else if (nota < 5){
     alert("Tu nota es: " +"Insuficiente " +  nota );
   } else if (nota < 6){ 
     alert("Tu nota es: " + "Insuficiente " +  nota);
   } else if (nota < 7){
     alert("Tu nota es: " +"Aprobado "  +  nota);
   } else if (nota < 8){
     alert("Tu nota es: " +"Bueno " +  nota );
   } else if (nota < 9){
     alert("Tu nota es: " +"Muy Bueno " +  nota);
   } else if (nota >= 9){
     alert("Tu nota es: " +"SOBRESALIENTE!! " +  nota);
   }
 }
