//Dao Villar 4/10/14
//Programming for Web Apps Section 1
//Wk2 -- Debug V2

function main(){
	console.log("FIGHT");
//Player names
	var playerOne = ["Thor",100,50];
	var playerTwo = ["Loki",100,50];
	
	//Round counter/starting point
	var round = 0;

	 function fight(){
		alert(playerOne[0] + ":" + playerOne[1] + "  *START*  " + playerTwo[0] + ":" + playerTwo[1]);
		for (var i = 0; i < 10; i++)
		{
			//Formula for finding the amount of damage recieved for each player 
			var playerOneMinDamge = playerOne[2] * .5;
			var playerTwoMinDamge = playerTwo[2] * .5;
			var f1 = Math.floor(Math.random()*(playerOne[2]-playerOneMinDamge)+playerOneMinDamge);
			var f2 = Math.floor(Math.random()*(playerTwo[2]-playerTwoMinDamge)+playerTwoMinDamge);
		
			//Damage taken from each player and info output via console.log.
			playerOne[1] = playerOne[1] - f1;
			playerTwo[1] = playerTwo[1] - f2;
			console.log(playerOne[0]+" : "+playerOne[1]+ " " +playerTwo[0]+" : "+playerTwo[1]);

			var kabal = document.getElementById('kabal');
			
			kabal.childNodes[1].innerHTML =playerOne[1];
			
			var kratos = document.getElementById('kratos');
			
			kratos.childNodes[1].innerHTML =playerTwo[1];
			
			//Check for victor
			var result = winnerCheck();
			console.log(result);
			if (result ==="no winner"){
				round++;
				alert(playerOne[0] +" : " + playerOne[1] + " *Round" + round + " OVER" + "*  " + playerTwo[0] + " : " + playerTwo[1]);
			}else{//if winner is found loop will break
				alert(result);
				break;
			};
		};

	};
	//Winner check function
	function winnerCheck(){
		var result = "no winner";
		if (playerOne[1]<1 && playerTwo[1]<1)
		{
			result = "You Both Die";
		}else if(playerOne[1]<1){
			result = playerTwo[0] + "  WINS!!!";
		}else if(playerTwo[1]<1)
		{
			result = playerOne[0] + "  WINS!!!";
		};
		return result;
	};
	fight();
	
}

document.body.onload = function() {
	main();
}













