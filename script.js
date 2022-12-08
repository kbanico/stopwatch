let seconds = 0;
let tens = 0;
let mins = 0;
const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");
const appendMins = document.querySelector("#mins");
let interval;

buttonStart.addEventListener("click",() =>{
  interval = setInterval(startTimer, 10)
});

buttonStop.addEventListener("click",()=>{
  clearInterval(interval)
});

buttonReset.addEventListener("click", reset);


function reset(){
  tens = "00";
  seconds = "00";
  mins = "00";
  appendTens.textContent = tens;
  appendSeconds.textContent = seconds;
  appendMins.textContent = mins;
  
}



function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.textContent = "0" + tens;

  }
  if (tens > 9) {
    appendTens.textContent = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.textContent = "0" + seconds;
    tens = 0;

  }
  if (seconds > 9) {
    appendSeconds.textContent = seconds;
  }

  if(seconds > 59){

    mins++
    appendMins.textContent = "0" + mins;
    seconds = 0;
    appendSeconds.textContent = "0" + seconds
  }

  if(mins > 9){
     appendMins.textContent = mins;
  }


}

