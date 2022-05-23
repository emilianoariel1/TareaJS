var form = document.querySelector('form');
var user = document.getElementById('user');
var clave = document.getElementById('clave');


form.onsubmit = function(e) {
    if (user.value === '' && clave.value === '') {
    e.preventDefault();
    alert("Completa ambos campos!");
    } else if (user.value === '') {
        e.preventDefault();
        alert("Falta ingresar nombre de usuario");
    } else if (clave.value === '') {
        e.preventDefault();
        alert("Falta ingresar contraseña");
    } else if (!user.value.includes("@")) {
        e.preventDefault();
        alert("Falta el @ en el nombre de usuario");
    }
   }