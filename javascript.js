console.log("NY Knicks Nation");

const basketball_icon = document.querySelector(".basketball_icon");
const h1element = document.querySelector("h1");
const spatiebalk = document.querySelector(".spatiebalk");
const loading = document.querySelector(".loading");
const background = document.querySelector("body");
const pijllinks = document.querySelector(".pijllinks");
const pijlmid = document.querySelector(".pijlmid")
const pijlrechts = document.querySelector(".pijlrechts");
const buzzer = new Audio('music/buzzer.mp3');
background.classList.add("background");

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

const publiek = new Audio('music/the_crowd.mp3');
const game = new Audio('music/gamesounds.mp3');
function hideanswer() {
  basketball_icon.style.visibility = "visible";
  loading.style.visibility = "visible";
  h1element.textContent = " ";
  spatiebalk.textContent = " ";
  setTimeout(showgame, 6000)
}

pijllinks.style.visibility = "hidden";
pijlmid.style.visibility = "hidden";
pijlrechts.style.visibility = "hidden";

function showgame() {
  basketball_icon.style.visibility = "hidden";
  loading.style.visibility = "hidden";
  background.classList.add("background2")
  publiek.play()
  game.play()
  pijllinks.style.visibility = "visible";
  pijlmid.style.visibility = "visible";
  pijlrechts.style.visibility = "visible";
}



//document.ondblclick = function(laadscherm){
//  console.log(laadscherm)
//  if (h1element.textContent == "f*ck it! we ball!")
//  setInterval(code)
//  }
//document.querySelector('body').AddEventlistener('keydown' , function(event){
//   if(event.keyCode === 32){
//           console.log(event)
//        h1element.textContent = "f*ck it! we ball!"
//}
//})
