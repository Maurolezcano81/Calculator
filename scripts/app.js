function extraerValores(elemento){
    let Elemento = document.getElementById(elemento);
    return Elemento.value;
}

function modificarPantalla(id){
    let elementoPantalla = document.getElementById('pantalla');
    let valorBoton = extraerValores(id)
    valorPantalla = elementoPantalla.textContent;
    return elementoPantalla.innerText = valorPantalla + valorBoton;
}

function borrarTodo(){
    let elementoPantalla = document.getElementById('pantalla');
    return elementoPantalla.innerText = '';
}

function borrarUno(){
    let elementoPantalla = document.getElementById('pantalla');
    textoPantalla = elementoPantalla.textContent;
    textoBorrado = textoPantalla.slice(0, -1);
    elementoPantalla.innerText = textoBorrado;
    return textoBorrado;
}

function mostrarResultado(){
    let elementoPantalla = document.getElementById('pantalla');
    let resultado = 0;
    resultado = eval(elementoPantalla.textContent);
    
    return elementoPantalla.innerText = resultado;
}

