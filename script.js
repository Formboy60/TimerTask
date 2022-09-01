const haut = document.querySelector('.haut');
const mid = document.querySelector('.mid');
const start = document.getElementById('strt');
const stop = document.getElementById('stp');
const reset = document.getElementById('rst');
const start1 = document.getElementById('strt1');
const stop1 = document.getElementById('stp1');
const reset1 = document.getElementById('rst1');
let sec = 0;
let min = 0;
let hrs = 0;
let t;
let sec1 = 0;
let min1 = 0;
let hrs1 = 0;
let t1;



// premier timer

function tick1(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add1() {
    tick1();
    haut.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer1();
}
function timer1() {
    t = setTimeout(add1, 1000);
}

start.onclick = timer1;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    haut.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}



// deuxieme timer

function tick2(){
    sec1++;
    if (sec1 >= 60) {
        sec1 = 0;
        min1++;
        if (min1 >= 60) {
            min1 = 0;
            hrs1++;
        }
    }
}
function add2() {
    tick2();
    mid.textContent = (hrs1 > 9 ? hrs1 : "0" + hrs1) 
        	 + ":" + (min1 > 9 ? min1 : "0" + min1)
       		 + ":" + (sec1 > 9 ? sec1 : "0" + sec1);
    timer2();
}
function timer2() {
    t1 = setTimeout(add2, 1000);
}

start1.onclick = timer2;
stop1.onclick = function() {
    clearTimeout(t1);
}
reset1.onclick = function() {
    mid.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}

// implémentation tableau

if(localStorage.getItem("tab")){
    document.querySelector('.tableau').innerHTML = localStorage.getItem('tab')
}


function ajoutLigne(numero, tache, temps){
    const table = document.querySelector("table")
    let ligne = table.insertRow(-1)
    let num = document.createTextNode(numero)
    let ta = document.createTextNode(tache)
    let tmp = document.createTextNode(temps)
    ligne.insertCell(0).appendChild(num)
    ligne.insertCell(1).appendChild(ta)
    ligne.insertCell(2).appendChild(tmp)
}

document.querySelector('.push').addEventListener('click', () => {    
    let dossier = document.querySelector(".dossier1").value
    let tache = document.querySelector(".tache1").value
    let temps = document.querySelector('.haut').textContent
    ajoutLigne(dossier, tache, temps)
    localStorage.setItem('tab', document.querySelector('.tableau').innerHTML)
    document.querySelector(".dossier1").value = ''
    document.querySelector(".tache1").value =''
    haut.textContent = "00:00:00"
})

document.querySelector('.push1').addEventListener('click', () => {    
    let dossier = document.querySelector(".dossier2").value
    let tache = document.querySelector(".tache2").value
    let temps = document.querySelector('.mid').textContent
    ajoutLigne(dossier, tache, temps)
    localStorage.setItem('tab', document.querySelector('.tableau').innerHTML)
    document.querySelector(".dossier2").value = ''
    document.querySelector(".tache2").value =''
    mid.textContent = "00:00:00"
})

document.querySelector('.effTab').addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})