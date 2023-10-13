/*let affiche = false*/
function displayOpen() {
          document.getElementById("fenetre").style.display = "block";
                 

        }
function displayClose(){
          document.getElementById("fenetre").style.display ="none"

}

        
        document.getElementById("buttonMenu").addEventListener("click", displayOpen);
        document.getElementById("buttonClose").addEventListener("click", displayClose);