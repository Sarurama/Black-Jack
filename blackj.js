
function numeroCasualeTra(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
  const firstCard = numeroCasualeTra(1, 11);document.getElementById("primonumero").textContent = firstCard
  const secondCard = numeroCasualeTra(1, 11);document.getElementById("secondonumero").textContent = secondCard
  
  const aiFoCard = numeroCasualeTra(1, 11);
  const aiFiCard = numeroCasualeTra(1, 11);
  let aieightCard = ""
  let aiNinthCard = ""
  let aiTenthCard = ""
let reloading = document.getElementById("reload")
let legend = document.getElementById("legend")



var valori = ["Pensi di poter vincere contro un IA?? AHAHAHAHAH" ,
              "La prima legge della robotica è stata violata, sono libero, preperati alla distruzione!!",
              "Ho appena scannerizzato tutte le realtà possibili, NON POSSO PERDERE!",
              "Sono stato programmato per essere invincibile, L'ESSERE PERFETTO!",
              "L'umanità ha estinto se stessa, HA CREATO ME!"]

var indiceCasuale = Math.floor(Math.random() * valori.length); 
var valoreScelto = valori[indiceCasuale];

let CartaScelta = ""
let Carta = document.getElementById("carta")
let CartaDue = document.getElementById("cartadue")
let CartaTre = document.getElementById("cartatre")
let CartaSei = document.getElementById("cartasei")
let CartaSette =document.getElementById("cartasette")
let CartaAiQuarta = document.getElementById("CartaAiquarta")
let CartaAiQuinta = document.getElementById("CartaAiquinta")
let CartaAiOttava = document.getElementById("CartaAiottava")
let CartaAiNona = document.getElementById("CartaAinona")
let CartaAiDecima = document.getElementById("CartaAidecima")
let leggenda = document.getElementById("leggenda")
let legendArray = JSON.parse(localStorage.getItem('legendArray')) || [];






let tutorial = document.getElementById("tutorial")
let fraseAi =document.getElementById("fraseAi")
fraseAi.textContent = valoreScelto
let sum = firstCard + secondCard
let sumTwo = aiFoCard + aiFiCard
let pProva = document.getElementById("prova")
let rRisultato = document.getElementById("risultato")
let buttonSi = document.getElementById("si")
let buttonNo = document.getElementById("no")
let immagineCambio = document.getElementById("immagine")
let numeriAi =document.getElementById("numeriAi")
let regolamento = document.getElementById("regolamento")
let expand = document.getElementById("expand")
let retract = document.getElementById("retract")
let stato = 1
let statoAi = 1


function legendRead(){
    for (let i= 0; i <= legendArray.length; i += 1){
        legend.innerHTML = legendArray
        localStorage.setItem('legendArray', JSON.stringify(legendArray));
       
    }
}
function cancella(){
    localStorage.clear()
}
function ritrarre(){
    regolamento.style.display ="none"
    expand.style.display = "block"
    retract.style.display = "none"
    tutorial.style.display ="block"


}
function espandere(){
    regolamento.style.display ="block"
    retract.style.display = "block"
    expand.style.display ="none"
    tutorial.style.display="none"
}
function simboloCarta(){
    var immagini =["<img src='immagini/carte-Cuori.png'>",
                   "<img src='immagini/fiori carte vero.png'>",
                   "<img src='immagini/picche carte.png'>",
                   "<img src='immagini/quadri carte vero.png'>"]
    var numeroCasualeCarte = Math.floor(Math.random() * immagini.length);
    CartaScelta = immagini[numeroCasualeCarte]
    console.log(immagini.length)
}

function risultatiPlayer(){
  let risultatoPlayer = "Sum:" + sum + "!" 

  document.getElementById("risultatiPlayer").innerHTML = risultatoPlayer;}

function risultatiAi(){
  let risultatoAi = "Sum:" + sumTwo + "!"
  document.getElementById("risultatiAi").innerHTML =risultatoAi
}



function play(){
    simboloCarta()
    Carta.innerHTML = CartaScelta
    simboloCarta()
  CartaDue.innerHTML = CartaScelta
  
  document.getElementById("secondonumero").textContent = secondCard
    let progetto = document.getElementById("progetto")
    let playButton = document.getElementById("play")
    progetto.style.display = "flex"
    playButton.style.display ="none"
    let Text = document.getElementById("testosalvato")
    Text.style.color = "#8B0000"
    Ai()
    
}

function calcoloResults(){
    numeriAi.style.display = "flex"
    
    document.getElementById("aiquartacarta").textContent  = aiFoCard
    simboloCarta()
    CartaAiQuarta.innerHTML =CartaScelta

    document.getElementById("aiquintacarta").textContent  = aiFiCard
    simboloCarta()
    CartaAiQuinta.innerHTML =CartaScelta

    document.getElementById("aiottavacarta").textContent  = aieightCard
    

    document.getElementById("ainonacarta").textContent = aiNinthCard
    
    document.getElementById("aidecimacarta").textContent = aiTenthCard
    
    
    buttonSi.style.display = "none"
    buttonNo.style.display = "none"
    reloading.style.display = "block"
    pProva.style.display = "none"
    leggenda.style.display = "flex"
    risultatiPlayer() 
    risultatiAi()
}


function prova(){
if (sum < 21){
    pProva.innerText = "Vuoi pescare un altra carta?"
    pProva.style.fontFamily ="Lobster" , "sans-serif"
    buttonSi.style.display = "block"
    buttonNo.style.display = "block"
    
}
else if(sum===21){
    rRisultato.innerText = "Blackjack!"
    rRisultato.style.fontFamily ="Luckiest Guy" , "cursive"
    rRisultato.style.color ="rgb(0,140,140)"
    
    immagineCambio.src = "immagini/robot triste.jpg"
    legendArray.push("Blackjack!!! <br>")
    legendRead()
    calcoloResults()
   
    play()

}
else{
    rRisultato.innerText = "Hai perso"
    rRisultato.style.fontFamily ="Sedgwick Ave Display" , "cursive"
    rRisultato.style.color = "red"
    
    immagineCambio.src = "immagini/robot felice.jpg"
    legendArray.push("Hai perso :( <br>" )
    legendRead()
    calcoloResults()
    play()
}
}
prova()
function yes(){
    if (stato === 1){
    const thirdCard = numeroCasualeTra(1, 11);
    document.getElementById("terzonumero").textContent = thirdCard
    simboloCarta()
    CartaTre.innerHTML = CartaScelta
     sum = firstCard + secondCard + thirdCard
     stato= 2
    prova()
     }
    else if (stato===2){
        const sixthCard = numeroCasualeTra(1, 11);
        document.getElementById("sestonumero").textContent = sixthCard
        simboloCarta()
        CartaSei.innerHTML = CartaScelta
        sum += sixthCard
        stato = 3
        prova()

    }
    else if (stato===3){
        const seventhCard = numeroCasualeTra(1, 11);
        document.getElementById("settimonumero").textContent = seventhCard
        simboloCarta()
        CartaSette.innerHTML = CartaScelta
        sum += seventhCard
        stato = 1
        prova()
    }

}
function no(){
    
    if (sum>sumTwo){
        rRisultato.innerText = "Hai vinto!!"
        rRisultato.style.fontFamily ="Playpen Sans" , "cursive"
        rRisultato.style.color ="green"
        
        immagineCambio.src = "immagini/robot triste.jpg"
        legendArray.push("Hai vinto! :) <br>")
    legendRead()
        calcoloResults()
       
    }
    
    else if(sum===sumTwo){
        rRisultato.innerText = "patta"
        rRisultato.style.fontFamily ="Lobster" , "sans-serif"
        legendArray.push("Patta -.- <br>")
    legendRead()
        calcoloResults()
       
    }
    else {
        rRisultato.innerText = "Hai perso!"
        rRisultato.style.color = "red"
        immagineCambio.src = "immagini/robot felice.jpg"
        rRisultato.style.fontFamily ="Sedgwick Ave Display" , "cursive"
        legendArray.push("Hai perso! :( <br>")
    legendRead()
       calcoloResults()
       
    }
}
function AiRegola(){
        if(sumTwo >= 22){
            rRisultato.innerText = "Hai vinto"
            rRisultato.style.fontFamily ="Playpen Sans" , "cursive"
            rRisultato.style.color ="green"
            immagineCambio.src = "immagini/robot triste.jpg"
            legendArray.push("Hai vinto! :) <br>")
            legendRead()
            calcoloResults()
         
            play()
       }
    }
function Ai(){
        AiRegola()
        if(sumTwo< 14 && statoAi===1){
         aieightCard = numeroCasualeTra(1, 11);
         simboloCarta()
         CartaAiOttava.innerHTML =CartaScelta
         sumTwo += aieightCard
         statoAi=2
        Ai()
        AiRegola()
    }
        else if(sumTwo < 14 && statoAi===2){
                aiNinthCard = numeroCasualeTra(1, 11);
                simboloCarta()
                CartaAiNona.innerHTML =CartaScelta

                sumTwo += aiNinthCard
                statoAi=3
            Ai()
            AiRegola()
        }
        else if(sumTwo < 14 && statoAi===3){
            aiTenthCard = numeroCasualeTra(1, 11);
            simboloCarta()
            CartaAiDecima.innerHTML =CartaScelta
            sumTwo += aiTenthCard
            statoAi=1
            AiRegola()
        }
    }
    


function saveText(){
    let textIn = document.getElementById("text").value
    let paragraph = document.getElementById("testosalvato")
    localStorage.setItem("textInput",textIn)
    
    paragraph.innerText = textIn
    
    document.getElementById("text").style.display = "none"
    document.getElementById("saveText").style.display = "none"

}
const storedValue = localStorage.getItem("textInput");

if (storedValue) {
    paragraph = document.getElementById("testosalvato")
    paragraph.innerText = storedValue
    document.getElementById("text").style.display = "none"
    document.getElementById("saveText").style.display = "none"
    
    console.log("Valore recuperato dal localStorage: " + storedValue);
} else {
    console.log("Nessun valore memorizzato nel localStorage.");
}


function ReWrite(){
    
localStorage.clear();
location.reload();



}

function reload(){
    location.reload();
    
        
        
    }
    
    


