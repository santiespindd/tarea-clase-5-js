//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const salario = document.querySelector('#salario');
let salarioMensual=  document.querySelector("#salario-mensual") ;

document.querySelector('#calcular-salario').addEventListener('click' , (e) => {
 e.preventDefault();
  console.log(this.salario.value);
    salarioMensual.value = parseInt(this.salario.value / 12);

});