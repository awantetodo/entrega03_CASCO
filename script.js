/*>> Consigna: Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, 
para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  
de la interfaz de nuestro simulador */

// ¡Que incluya la definición de un algoritmo en JavaScript que opere sobre el DOM manejando eventos!

// Cuando el usuario completa algún dato, por ejemplo cantidad de cuotas, 
// se captura ese dato y se agregan elementos al DOM mediante JS.

// Capturar la tecla ENTER para confirmar alguna acción.

function agregarAuto(){
    const precio = prompt ("Ingresar el monto de tu auto");
    const modelo = prompt ("indica modelo");
    const ElementoAuto = crearElementoAuto(precio,modelo);
    document.getElementById("listadoAutos").innerHTML = ElementoAuto ;
}

function crearElementoAuto(precio,modelo){
return document.createElement("li").innerHTML = "modelo: "+modelo+" - precio:"+precio;
}


