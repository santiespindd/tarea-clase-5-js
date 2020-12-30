//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const horas = document.querySelectorAll('.hora');
const minutos = document.querySelectorAll('.minuto');
const segundos = document.querySelectorAll('.segundo');

document.querySelector('#calcular-horas-totales').onclick = function(){
   
    let segundosTotales = 0;

    for ( let i = 0 ; i < horas.length ; i++) {
        segundosTotales += Number(horas[i].value) * 3600 + Number(minutos[i].value) * 60 + Number(segundos[i].value);
    }
  
    document.querySelector('#resultado').innerHTML = formateoTotalHoras(segundosTotales);

    return false;
}




function formateoTotalHoras(segundos) {
    let hora = String(Math.floor(segundos / 3600));
    hora = (hora < 10)? hora.padStart(2, '0'): hora;
    let minuto = String(Math.floor((segundos / 60) % 60));
    minuto = (minuto < 10)? minuto.padStart(2, '0') : minuto;
    let segundo = String(segundos % 60);
    segundo = (segundo < 10)? segundo.padStart(2, '0') : segundo;
    return 'Horas totales de video ' + hora + ':' + segundo + ':' + minuto;
    
  }