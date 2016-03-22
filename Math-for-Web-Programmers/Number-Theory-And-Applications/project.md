#Project Assignment 

**Question 1**

	function primeList(n) {
 
    // Sieve of Eratosthenes
    var array = [];
    var k = Math.sqrt(n);
    var output = [];
 
    // Initial array
    for (var i = 0; i < n; i++) {
        array.push(0);
    }
 
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= k; i++) {
        if (array[i] === 0) {
            var multiple = i;
            var counter = 2;
            while(multiple < n){
                multiple = i*counter;
                array[multiple] = 1;
                counter++;
            }
        }
    }
 
    //Now store the variables such that array[]
    for (var i = 2; i < n; i++) {
        if(array[i] === 0) {
            output.push(i);
        }
    }
 
    return output;
	}
 
	function primeFactors(n){
    var primes = primeList(n);
    var result = [];
    for (var i = 0; i < primes.length; i++){
        if(n % primes[i] === 0){
            result.push(primes[i]);
        }
    }
    return result; 
	}

primeFactors(100);

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