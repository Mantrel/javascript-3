let colorSeleccionado = '';

document.addEventListener('keydown', function (event) {

    if (event.key === 'a') {
        colorSeleccionado = 'red';
    } else if (event.key === 's') {
        colorSeleccionado = 'royalblue';
    }
    else if (event.key === 'd') {
        colorSeleccionado = 'yellowgreen';
    }
    else if (event.key === 'f') {
        colorSeleccionado = 'greenyellow';
    }
    console.log(colorSeleccionado);

});


let color1 = document.querySelector('#div1')
let color2 = document.querySelector('#div2')
let color3 = document.querySelector('#div3')
let color4 = document.querySelector('#div4')

color1.addEventListener("click", function () { color1.style.backgroundColor = colorSeleccionado });
color2.addEventListener("click", function () { color2.style.backgroundColor = colorSeleccionado });
color3.addEventListener("click", function () { color3.style.backgroundColor = colorSeleccionado });
color4.addEventListener("click", function () { color4.style.backgroundColor = colorSeleccionado });