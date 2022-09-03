var timeStart = 0;
var timeEnd = 0
let stock = 0

let p = document.querySelector('.haut')
let str = document.querySelector('.srt')
let stp = document.querySelector('.stp')

str.addEventListener('click', () => {
  if(timeStart > 0 ){
    return
  }
  timeStart = new Date(Date.now()).getTime()
  p.style.color = "green"
})

stp.addEventListener('click', () => {

  if(timeStart == 0){
    return
  } 

  timeEnd = new Date(Date.now()).getTime()
  let hourDiff = timeEnd - timeStart;
   
  if(stock == 0){
  stock = hourDiff
  } else { stock = stock + hourDiff}

  timeStart = 0
  
  var secDiff = stock / 1000; //in s
  var minDiff = stock / 60 / 1000; //in minutes
  var hDiff = stock / 3600 / 1000; //in hours
  var humanReadable = {};
  humanReadable.hours = Math.floor(hDiff);
  humanReadable.minutes = Math.floor(minDiff - 60 * humanReadable.hours);
  
  p.innerHTML= humanReadable.hours + 'h : ' + humanReadable.minutes +'min'
  p.style.color = "red"
})

// affichage date

let date = new Date(Date.now())
let pDate = document.querySelector('.date')

pDate.innerHTML = (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) 
                  + " / " 
                  +((date.getMonth()+1) > 9 ?  (date.getMonth()+1) : "0" + (date.getMonth()+1))
                  + " / " 
                  + date.getFullYear()

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
    p.textContent = "0h : 0min"
    p.style.color = 'black'
})



document.querySelector('.effTab').addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})