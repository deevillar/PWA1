//Dao Villar Programming for Web Apps Section 1
//Wk1 -- The duel- Part 1

document.body.onload = function() {
	main();
}

function main(){
	console.log("FIGHT");
	//Player names
	var playerOne = "Thor";
	var playerTwo = "Loki";
	//players starting health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	//players max damage 
	var playerOneMaxDamge = 50;
	var playerTwoMaxDamge = 50;
	//Round counter/starting point
	var round = 0;

	 function fight(){
		alert(playerOne + ":" + playerOneHealth + "  *START*  " + playerTwo + ":" + playerTwoHealth);
		for (var i = 0; i < 10; i++)
		{
			//Formula for finding the amount of damage recieved for each player 
			var playerOneMinDamge = playerOneMaxDamge * .5;
			var playerTwoMinDamge = playerTwoMaxDamge * .5;
			var f1 = Math.floor(Math.random()*(playerOneMaxDamge-playerOneMinDamge)+playerOneMinDamge);
			var f2 = Math.floor(Math.random()*(playerTwoMaxDamge-playerTwoMinDamge)+playerTwoMinDamge);
		
			//Damage taken from each player and info output via console.log.
			playerOneHealth = playerOneHealth - f1;
			playerTwoHealth = playerTwoHealth - f2;
			console.log(playerOne+" : "+playerOneHealth+ " " +playerTwo+" : "+playerTwoHealth);

			var kabal = document.getElementById('kabal');
			
			kabal.childNodes[1].innerHTML =playerOneHealth;
			
			var kratos = document.getElementById('kratos');
			
			kratos.childNodes[1].innerHTML =playerTwoHealth;
			
			//Check for victor
			var result = winnerCheck();
			console.log(result);
			if (result ==="no winner"){
				round++;
				alert(playerOne +" : " + playerOneHealth + "*Round" + round + " OVER" + "*  " + playerTwo + " : " + playerTwoHealth);
			}else{//if winner is found loop will break
				alert(result);
				break;
			};
		};

	};
	//Winner check function
	function winnerCheck(){
		var result = "no winner";
		if (playerOneHealth<1 && playerTwoHealth<1)
		{
			result = "You Both Die";
		}else if(playerOneHealth<1){
			result = playerTwo + "  !**Wins**!";
		}else if(playerTwoHealth<1)
		{
			result = playerOne + "  !**Wins**!";
		};
		return result;
	};
	fight();
}















