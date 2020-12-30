//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listNumeros = document.querySelectorAll('li');

let sumaNum=0;
let prom;
let mayor=  -Infinity;
let menor= Infinity;




for(i =0; i < $listNumeros.length ; i++){
    const numero = Number($listNumeros[i].innerText);
    sumaNum += numero; 

    if(menor > numero){
        menor = numero;
    }
    else if(mayor < numero) {
        mayor= numero;
    }

  };
  
   prom= parseInt(sumaNum / $listNumeros.length);

   document.querySelector('#promedio').innerHTML =  `El promedio es ${prom}`; 
   document.querySelector('#menor').innerHTML =  `El numero mas pequeño es ${menor}`; 
   document.querySelector('#mayor').innerHTML =  `El numero mas grande es ${mayor}`; 
   document.querySelector('#numero-mas-frecuente').innerHTML =  `El numero mas frecuente es ${moda($listNumeros)}`; 


   
   function moda(listaDeNumeros){

     let i;
     let j;
     let maximoNumRepeticiones= 0;
     let frecuente=0;
     

     for(i =0 ; i < listaDeNumeros.length ; i++){
        const numero = Number($listNumeros[i].innerText);
        let repeticiones =0;

        for(j =0 ; j < listaDeNumeros.length ; j++){
            const numero2 = Number($listNumeros[j].innerText);
            if(numero === numero2){
                repeticiones++;
            }
            if(repeticiones > maximoNumRepeticiones){
                frecuente = numero;
                maximoNumRepeticiones = repeticiones;
            }
        }

     } 

     return frecuente;

   }

  

