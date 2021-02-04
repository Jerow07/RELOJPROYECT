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

var citadesaludo = document.getElementById("citadesaludo")

var videofondo = document.getElementById("videoDeFondo")

if(tiempo.getHours() > 19 || tiempo.getHours()< 6 ) {
    
    citadesaludo.innerHTML = "<ion-icon class='iconoboton' name='moon'></ion-icon><span>Good night, it's currently</span>"
}
function deslizar(){
    
    var botondezlis = document.getElementById("boton")
    console.log(botondezlis.innerHTML)
    let height = document.getElementById("partesinfondo").offsetHeight;

    if(botondezlis.innerHTML == 'MORE<ion-icon class="iconoboton md hydrated" name="chevron-down-circle" role="img" aria-label="chevron down circle"></ion-icon>') {
        botondezlis.innerHTML = 'LESS<ion-icon class="iconoboton md hydrated" name="chevron-up-circle" role="img" aria-label="chevron up circle"></ion-icon>'
        scrollTo({  top: height, behavior: 'smooth'})
    } else {
        botondezlis.innerHTML = 'MORE<ion-icon class="iconoboton md hydrated" name="chevron-down-circle" role="img" aria-label="chevron down circle"></ion-icon>'
        scrollTo({  top  : 0, behavior: 'smooth'})
    
    }

}

var frases = [
    {
        "persona": "Mark Bezos",
        "frase": "Tu vieja dice que tu vieja"
    },
    {
        "persona": "Jeff Bezos",
        "frase": "Tengo toda la plata"
    },
    {
        "persona": "Mark Zuckerberg",
        "frase": "Facebook es una garcha"
    },
]

function cambiarfrase() {
   var frase = document.getElementById("frase")
   var persona = document.getElementById("persona")

   var indice = Math.floor(Math.random() * (3 - 0))

   frase.innerHTML = frases[indice].frase
   persona.innerHTML = frases[indice].persona
}
