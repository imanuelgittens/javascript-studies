#Project Assignment 

**Question 1**

	function primeFactorList(n) {
	if (n < 1){
	    console.log("You need to enter a value great than 1!");
	    return;
	}
	
	var result = [];
	while (n != 1) {
		var factor = smallestFactor(n);
		result.push(factor);
		n /= factor;
	}
	return result;
	}


	/* 
 	* Returns the smallest prime factor of the given integer.
 	*/
	function smallestFactor(n) {
	if (n < 2){
	    console.log("You need to enter a value great than 2!");
	    return;
	}
	
	if (n % 2 == 0)
		return 2;
	var end = Math.floor(Math.sqrt(n));
	for (var i = 3; i <= end; i += 2) {
		if (n % i == 0)
			return i;
	}
	return n;
	}

	primeFactorList(3);

---

**Question 2**

	function rpsls(p1, p2){
    	var choices = ["rock", "spock", "paper", "lizard", "scissors"];
    	var playerOneNum = 0;
    	var playerTwoNum = 0;
    	for( var i = 0; i < choices.length; i++){
        	if(p1 === choices[i]){
            	playerOneNum = i;
        	}
        	if(p2 === choices[i]){
            	playerTwoNum = i;
        	}
    	}
    
    	selectWinner(playerOneNum, playerTwoNum)

	}

	function selectWinner(p1, p2){
    	var winner = (p2-p1)%5;
    	if(winner === 1 || winner === 2){
        	console.log("Player 2 wins!");
    	}else{
        	if(winner === 3 || winner === 4){
            	console.log("Player 1 wins!");
        	}else{
            	console.log("The game is tied!");
        	}
    	}
	}

	rpsls("lizard", "lizard");