const saludo = document.getElementById('botonDiv');
saludo.addEventListener('click',function(){

    alert('Hola! soy el div');
})
const botonSaludo = document.getElementById('botonSaludar');
botonSaludo.addEventListener('click',function(){
    event.stopPropagation();
    
})