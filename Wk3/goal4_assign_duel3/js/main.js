// JavaScript Document

//Self Invoking Functions, function start
(function(){
	console.log("FIGHT!");
//Player's info, inital healths are 100
	var players = {
		 player_One:{name:"Thor",health:100,damage:20},
		 player_Two:{name:"Loki",health:100,damage:20}
		};

//player's names/health on screen
	var thor = document.querySelector("#kabal p");
//	console.log(thor);
	thor.innerHTML = players.player_One.name +":"+ players.player_One.health;

	var loki = document.querySelector("#kratos p");
//	console.log(loki);
	loki.innerHTML = players.player_Two.name +":"+ players.player_Two.health;

	var theBell = document.querySelector("#fight_btn h4");
//	console.log(theBell);
	var round = 0;
// Button variable for fight
	var fightButton = document.querySelector("#fight_btn a");
//	console.log(fightButton);

	function fight(){
		// logic for finding the amount of damage to each player 
		var playerOne = players.player_One.damage * .5;
		var playerTwo = players.player_Two.damage * .5;
		var f1 = Math.floor(Math.random()*(players.player_One.damage-playerOne)+playerOne);
		var f2 = Math.floor(Math.random()*(players.player_Two.damage-playerTwo)+playerTwo);
		
		//Damage taken from each player and info output via console.log.
		players.player_One.health = players.player_One.health - f1;
		players.player_Two.health = players.player_Two.health - f2;
		console.log(players.player_One.name+" : "+players.player_One.health+ " " +players.player_Two.name+" : "+players.player_Two.health);
		thor.innerHTML = players.player_One.name +":"+ players.player_One.health;
		loki.innerHTML = players.player_Two.name +":"+ players.player_Two.health;
		round = round + 1;
		theBell.innerHTML = "Round "+ round + " is OVER!";
		console.log(round);
		//Check for victor
		var result = winnerCheck();
		console.log(result);
		
	};
	//Winner check function
	function winnerCheck(){
		var result = "no winner";
		//if both players die text will display 
		if (players.player_One.health<1 && players.player_Two.health<1)
		{
			thor.innerHTML="";
			loki.innerHTML="You Both Die";
			fightButton.innerHTML = "Done!";
			fightButton.onclick = function(e){
				console.log("Game Over");
			};
			result = loki;
		//if only dumbo's health drops to 0 col wins
		}else if(players.player_One.health<1){
			thor.innerHTML="";
			loki.innerHTML=  players.player_Two.name + " WINS!!!";
			fightButton.innerHTML = "Done!";
			fightButton.onclick = function(e){
				console.log("Game Over");
			};
			result = loki;
		//if only col health drops to 0 dumbo wins
		}else if(players.player_Two.health<1){
			thor.innerHTML = "";
			loki.innerHTML=players.player_One.name + " WINS!!!";
			fightButton.innerHTML = "Done!";
			fightButton.onclick = function(e){
				console.log("Game Over");
			};
			result = loki;
		//if round reaches 10 game ends in a tie
		}else if(round === 10){
			thor.innerHTML="";
			loki.innerHTML="Game Ends In A Tie";
			fightButton.innerHTML = "Done!";
			fightButton.onclick = function(e){
				console.log("Game Over");
			};
			result = loki;
		};
		return result;
	};
	fightButton.onclick = function(e){
		fight();

		e.preventDefault();
		return false;
	};
	
	
})();













