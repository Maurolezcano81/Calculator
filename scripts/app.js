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
    textoPantalla = elementoPantalla.lenght;
    console.log(textoPantalla.lenght)
    let c = 0;
    while (c <= textoPantalla.lenght){
        
        if (c >= textoPantalla.lenght){
            textoPantalla = textoPantalla - c;
        }
        c++;
    }
    return textoPantalla;
}



function anadir(boton){
    let escucharBoton = document.getElementById(boton);
}