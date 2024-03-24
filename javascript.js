console.log("NY Knicks Nation");
const titlemusic = new Audio("music/title_music.mp3");//bron: street fighter II: Guiles Theme
const basketball_icon = document.querySelector(".basketball_icon");
const h1element = document.querySelector("h1");
const spatiebalk = document.querySelector(".spatiebalk");
const loading = document.querySelector(".loading");
const background = document.querySelector("body");
const pijllinks = document.querySelector(".pijllinks");
const pijlmid = document.querySelector(".pijlmid");
const pijlrechts = document.querySelector(".pijlrechts");
const buzzer = new Audio("music/buzzer.mp3");
const awkward = new Audio("music/awkward.mp3");// bron:https://www.youtube.com/watch?v=CpGtBnVZLSk
const yay = new Audio("music/yay.mp3"); //bron: https://youtu.be/barWV7RWkq0?feature=shared


background.classList.add("background");
titlemusic.play()
basketball_icon.style.visibility = "hidden";
loading.style.visibility = "hidden";

document.body.onkeydown = function verder(gadoor) {
  console.log(gadoor);
  if (gadoor.code == "spatiebalk" || gadoor.keyCode == 32) {
    h1element.textContent = "f*ck it! we ball!";
    laadscherm();
  }
};

function laadscherm() {
  basketball_icon.style.visibility = "hidden";
  loading.style.visibility = "hidden";
  setTimeout(hideanswer, 2000);
}
const swish = new Audio("music/swish.mp3"); //Bron: https://youtu.be/snctOXOfS0M?si=c-esE4Kl_ai77yFO
const publiek = new Audio("music/the_crowd.mp3");
const game = new Audio("music/gamesounds.mp3");
function hideanswer() {
  basketball_icon.style.visibility = "visible";
  loading.style.visibility = "visible";
  h1element.textContent = " ";
  spatiebalk.textContent = " ";
  setTimeout(showgame, 6000);
}

pijllinks.style.visibility = "hidden";
pijlmid.style.visibility = "hidden";
pijlrechts.style.visibility = "hidden";

function showgame() {
  basketball_icon.style.visibility = "hidden";
  loading.style.visibility = "hidden";
  background.classList.add("background2");
  publiek.play();
  game.play();
  h1element.textContent = "the last chance! pick a side";
  pijllinks.style.visibility = "visible";
  pijlmid.style.visibility = "visible";
  pijlrechts.style.visibility = "visible";
}

pijllinks.addEventListener("click", courtLR);
pijlmid.addEventListener("click", courtmid);
pijlrechts.addEventListener("click", courtLR);
console.log(randomnumberLR);
console.log(randomnumberMid);

function courtLR() {
  let randomnumberLR = Math.round(Math.random() * 8);
  if (randomnumberLR < 3) { 
    win()
  } else {
    lose()
  }
}
function courtmid() {
  let randomnumberMid = Math.round(Math.random() * 2);
  if (randomnumberMid < 2) {
    win()
  } else {
    lose()
  }
}
function reload(){
  location.reload()
}
function stop(){
  game.pause();
  titlemusic.pause()
  publiek.pause();
  buzzer.play();
}
function win() {
  swish.play()
  yay.play()
  h1element.textContent = "you did it! the crowd goes wild! 3 points!";
  background.classList.add("backgroundwin");
  pijlmid.style.visibility = "hidden";
  pijllinks.style.visibility = "hidden";
  pijlrechts.style.visibility = "hidden";
  stop();
  setTimeout(reload, 6000);
}

function lose() {
  h1element.textContent = "you missed shieeeeettt that's awkward";
  background.classList.add("backgroundlose");
  pijlmid.style.visibility = "hidden";
  pijllinks.style.visibility = "hidden";
  pijlrechts.style.visibility = "hidden";
  stop();
  awkward.play()
  setTimeout(reload, 11000);
}
