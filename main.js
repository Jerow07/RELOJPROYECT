var reloj = document.getElementById("hora");

var tiempo = new Date();



var diadelanio = document.getElementById("diadelanio")

var start = new Date(tiempo.getFullYear(), 0, 0);
var diff = (tiempo - start) + ((start.getTimezoneOffset() - tiempo.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

diadelanio.innerHTML = day

var diadelmes= document.getElementById("diadelmes");

diadelmes.innerHTML= tiempo.getDate()

var diaDeLaSemana = document.getElementById("diadelasemana");

diaDeLaSemana.innerHTML = tiempo.getDay() + 1;

setInterval(function actualizarHora() {
    var tiempo = new Date();
    
    var segundos = tiempo.getSeconds()
    var hora = tiempo.getHours()
    var minutos = tiempo.getMinutes()
    
    if(tiempo.getSeconds() < 10) { 
        segundos = "0" + tiempo.getSeconds()
    }
    if(tiempo.getMinutes() < 10) { 
        minutos = "0" + tiempo.getMinutes()
    }
    if(tiempo.getHours() < 10) { 
        hora = "0" + tiempo.getHours()
    }
    
    reloj.innerHTML = hora + ":" + minutos + ":" + segundos
}, 1000)

var imagenfondohora = document.getElementById("confondo")
var citadesaludo = document.getElementById("citadesaludo")

if(tiempo.getHours() > 19 || tiempo.getHours()< 6 ) {
    imagenfondohora.style.background = "url('bosque-noche.jpg')no-repeat"
    citadesaludo.innerHTML = "<ion-icon class='iconoboton' name='moon'></ion-icon><span>Good night, it's currently</span>"
}
function deslizar(){
    var botondezlis = document.getElementById("boton")
    botondezlis.innerHTML = "LESS<ion-icon class='iconoboton' name='chevron-up-circle'></ion-icon>"

}