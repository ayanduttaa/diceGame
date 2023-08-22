document.getElementById("playbtn").addEventListener("click", function() {

  // Disable the button during dice roll
  document.getElementById("playbtn").disabled = true;

  document.querySelector("#img1").classList.add("roller");
  document.querySelector("#img2").classList.add("roller");

  // Generate random numbers after a delay
  setTimeout(function() {
    var a = Math.floor(Math.random()*6)+1;
    var b = Math.floor(Math.random()*6)+1;

    function imgenerate(x){
      var img = "images/dice"+x+".png";
      return img;
    }

    document.querySelector("#img1").setAttribute("src",imgenerate(a));
    document.querySelector("#img2").setAttribute("src",imgenerate(b));

    // Determine the winner after another delay
    setTimeout(function() {
      if(a > b){
        var txt = "The winner is: Player 1";
        document.querySelector(".winner").textContent = txt;
      }
      else if(b > a){
        var txt = "The winner is: Player 2";
        document.querySelector(".winner").textContent = txt;
      }
      else{
        var txt = "It is a draw!";
        document.querySelector(".winner").textContent = txt;
      }

      document.querySelector("#img1").classList.remove("roller");
      document.querySelector("#img2").classList.remove("roller");

    }, 1000); // Adjust the delay (in milliseconds) for determining the winner as per your preference

    // Re-enable the button after dice roll is complete
    setTimeout(function() {
      document.getElementById("playbtn").disabled = false;
    }, 2000); // Adjust the delay (in milliseconds) for re-enabling the button as per your preference

  }, 1000); // Adjust the delay (in milliseconds) for generating random numbers as per your preference

});
