const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const soundOn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes;
let interval;
let audio = new Audio("./sound/alarm.mp3");

//function callback
const sounder = () => {
  soundOn.classList.add("hide");
  soundOff.classList.remove("hide");
  audio.loop = true;
  audio.play();
};

const sounderOff = () => {
  soundOff.classList.add("hide");
  soundOn.classList.remove("hide");


  //stop the music
  audio.loop = false;
  audio.pause();
  audio.currentTime = 0;
  

};


const setter = () => {
  minutes = prompt("Quantos minutos?");

  if (minutes === null) {
    return;
  }

  secondsDisplay.textContent = String(0).padStart(2, "0");

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
};


const stopper = () => {
  stop.classList.add("hide");
  buttonSet.classList.remove("hide");
  play.classList.remove("hide");
  pause.classList.add("hide");
  clearInterval(interval);
  secondsDisplay.textContent = String(0).padStart(2, "0");
  minutesDisplay.textContent = String(0).padStart(2, "0");
};

const player = () => {
  play.classList.add("hide");
  pause.classList.remove("hide");
  buttonSet.classList.add("hide");
  stop.classList.remove("hide");
  const countdown = () => {
    let seconds = parseInt(secondsDisplay.textContent);
    let minutes = parseInt(minutesDisplay.textContent);

    if (seconds > 0) {
      seconds--;
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
    } else if (minutes > 0) {
      minutes--;
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
      secondsDisplay.textContent = String(59).padStart(2, "0");
    } else {
      clearInterval(interval);
    }
  };
  interval = setInterval(countdown, 1000);
};

const pauser = () => {
  pause.classList.add("hide");
  play.classList.remove("hide");
  clearInterval(interval);
};

//eventos
play.addEventListener("click", player);

pause.addEventListener("click", pauser);

buttonSet.addEventListener("click", setter);

stop.addEventListener("click", stopper);

soundOn.addEventListener("click", sounder);

soundOff.addEventListener("click", sounderOff);
