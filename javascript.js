console.log("NY Knicks Nation")

let h1element = document.querySelector("h1")
document.body.onkeyup = function(gadoor) {
    if (gadoor.key == " " ||
        gadoor.code == "spatiebalk" ||      
        gadoor.keyCode == 32      
    ) {
        h1element.textContent = "f*ck it! we ball!"
    }
  }
