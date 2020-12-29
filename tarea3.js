//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const horas = document.querySelectorAll('#hora');
const minutos = document.querySelectorAll('#minuto');
const segundos = document.querySelectorAll('#segundo');


document.querySelector('#calcular-horas-totales').addEventListener('click', (e) => {
    e.preventDefault();
    let segundosTotales = 0;

    for (i = 0 ; i < horas.length ; i++) {

        segundosTotales += Number(horas[i].value) * 3600 + Number(minutos[i].value) * 60 + Number(segundos[i].value);
     }
   
     console.log(segundosAhoras(segundosTotales));
     document.querySelector('#resultado').innerHTML = segundosAhoras(segundosTotales);
});





function segundosAhoras(segundos) {
   let hora = Math.floor(segundos / 3600);
    hora = (hora < 10)? '0' + hora: hora;
    let minuto = Math.floor((segundos / 60) % 60);
    minuto = (minuto < 10)? '0' + minuto : minuto;
    let segundo = segundos % 60;
    segundo = (segundo < 10)? '0' + segundo : segundo;
    return 'Horas totales de video ' + hora + ':' + segundo + ':' + minuto;
  }