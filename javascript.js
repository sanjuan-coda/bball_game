console.log("NY Knicks Nation")


// let h1element = document.querySelector("h1")
// document.body.onkeyup = function(gadoor) {
//     console.log(gadoor) 
//     if (gadoor.key == " " &&
//         gadoor.code == "spatiebalk" &&      
//         gadoor.keyCode == 33
//     ) {
//         h1element.textContent = "f*ck it! we ball!"
//     }
//   }

document.querySelector('body').AddEventlistener('keydown' , function(event){
    if(event.keyCode === 32){
        console.log(event);
    }
});