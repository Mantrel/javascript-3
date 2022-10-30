function alertar(texto){
    alert(texto);
}



//Sale al cargar la pagina
const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", alertar('hola 0'));
//Alerta mediante click y metodo de flecha (arrow)
const btn = document.querySelector("#btn1");
btn.addEventListener("click", () => alert('hola 1'));
//Alerta mediante función
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(){
    alert('hola 2')
    return;
});
//Alerta que nos da el ID del button
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(e){
    alert(e.target.id);
});



//Expresión de función
suma = function(a,b) {
    return a + b;
}

//Función de flecha
suma = (a,b) => a + b;
