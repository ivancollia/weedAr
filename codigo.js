window.onscroll = function(){miFuncion()}

let tierra = document.getElementById("tierra")
let plantar = document.getElementById("plantar")
let planta = document.getElementById("planta")
let cosecha =document.getElementById("cosecha")

let distancia_tierra,distancia_plantar,distancia_planta,distancia_cosecha

function miFuncion(){
    distancia_tierra = window.innerHeight - tierra.getBoundingClientRect().top
    if(distancia_tierra >= 100){
        tierra.classList.add("efecto-tierra")
    }
    distancia_plantar = window.innerHeight - plantar.getBoundingClientRect().top
    if(distancia_plantar >= 100){
        plantar.classList.add("efecto-plantar")
    }
    distancia_planta = window.innerHeight - planta.getBoundingClientRect().top
    if(distancia_planta >= 100){
        planta.classList.add("efecto-planta")
    }
    distancia_cosecha = window.innerHeight - cosecha.getBoundingClientRect().top
    if(distancia_cosecha >= 100){
        cosecha.classList.add("efecto-cosecha")
    }
}