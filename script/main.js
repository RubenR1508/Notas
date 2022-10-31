
do{



let name = prompt("ingresa tu nombre");
let nNotas = prompt("ingrese el número de notas");
let promedio = calcularPromedio(nNotas);

alert(name + ". Tu promedio es de " + promedio);

let next = prompt("Quieres ingresar otro estudiante? SI o NO ");
if(next === "NO")
break;

}while(true);
 
function calcularPromedio (nNotas){
   let suma = 0;
   
   for( let i = 1; i <= nNotas; i++){
     let oux = Number(prompt("Ingresa nota #" + i ));
       suma += oux;
      }

return suma / nNotas;
}
