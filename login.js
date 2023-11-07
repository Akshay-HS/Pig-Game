function saveNames() {
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;

    if (player1Name && player2Name) {
      var players = {
        player1: player1Name,
        player2: player2Name,
      };

      sessionStorage.setItem("players", JSON.stringify(players));
    } else {
      alert("Please enter both player names.");
    } 
  }