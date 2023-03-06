let playButtonEl=document.getElementById("play-button");
let containerEl=document.getElementById("container");
let arrayBombe=[];
let punteggio=0;
let layEl=document.getElementById("lay");
layEl.classList.add("laytrasp");
let riquadroRisultatoEl= document.getElementById("riquadro-risultato");
let bombaCalpEl= document.getElementById("bomba-calp")
let puntiEl=document.getElementById("punti");
let complimentiEl=document.getElementById("complimenti");

let contatoreBombe=0;

while(contatoreBombe<16){
    let bomba= Math.floor(Math.random()* 100 +1);
    if((arrayBombe.includes(bomba))){
        let bomba= Math.floor(Math.random()* 100 +1);
    }else{
        arrayBombe.push(bomba);
        contatoreBombe++;
    }
}

playButtonEl.addEventListener("click", function(){
    for(let i=1; i<=100; i++){
        let casella= document.createElement('div');
        casella.classList.add("quadrata");
        casella.innerText= i;
        containerEl.append(casella);
        casella.addEventListener("click", function(){
            if(arrayBombe.includes(i)){
                casella.classList.add("rossa");
                layEl.classList.remove("laytrasp");
                layEl.classList.add("layopaco");
                riquadroRisultatoEl.classList.add("ris-visibile");
                bombaCalpEl.classList.add("calp-visibile");
                puntiEl.innerHTML=("Hai totalizzato " + punteggio +" punti")

            }else{
                casella.classList.add("azzurra");
            punteggio++;
            if(punteggio==84){
                layEl.classList.remove("laytrasp");
                layEl.classList.add("layopaco");
                riquadroRisultatoEl.classList.add("ris-visibile");
                complimentiEl.classList.add("compl-visibile");
            }
            }
        })
    }
})
