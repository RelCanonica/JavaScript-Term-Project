document.getElementById("concentration").addEventListener("mouseover",function(){
    document.getElementById("message").innerHTML="Flip over cards to make matches<br><br> --PLAY--";
})

document.getElementById("concentration").addEventListener("mouseout",function(){
    document.getElementById("message").innerHTML="Game 1: Catcentration";
})

document.getElementById("puzzle").addEventListener("mouseover",function(){
    document.getElementById("message2").innerHTML="Put together a puzzle of a cat<br><br> --PLAY--";
})

document.getElementById("puzzle").addEventListener("mouseout",function(){
    document.getElementById("message2").innerHTML="Game 2: Purrzle";
})

document.getElementById("quiz").addEventListener("mouseover",function(){
    document.getElementById("message3").innerHTML="Earn points by answering questions about cats<br><br> --PLAY--";
})

document.getElementById("quiz").addEventListener("mouseout",function(){
    document.getElementById("message3").innerHTML="Game 3: Feline Facts Quiz";
})

function goBack() {
    window.history.back();
  }