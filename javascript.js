console.log("NY Knicks Nation")


let h1element = document.querySelector("h1")

document.body.onkeyup = function(gadoor) {
console.log(gadoor) 
if (gadoor.code == "spatiebalk" ||   
    gadoor.keyCode == 32
    ) {
    h1element.textContent = "f*ck it! we ball! Double click!"
   }
 }

document.ondblclick = function(laadscherm){
console.log(laadscherm)
if (h1element.textContent == "f*ck it! we ball!")
setInterval((3000) => {
    
}, interval);
}

//document.querySelector('body').AddEventlistener('keydown' , function(event){
//   if(event.keyCode === 32){
//           console.log(event)
//        h1element.textContent = "f*ck it! we ball!"
//}
//})
