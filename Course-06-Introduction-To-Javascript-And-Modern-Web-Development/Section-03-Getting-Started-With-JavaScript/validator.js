(function(window){

	var validator = {};

	validator.isEmailAddress = function(input){

		if(!input){
			throw "Missing Parameter in isEmailAddress function: 'input'.";	
		}

		if(input.indexOf("@") == -1){
			return false;
		}

		var emailParts = input.split('@');
		var domain = emailParts[1];

		if(domain.indexOf('.') == -1){
			return false;
		}else{
			var domainParts = domain.split('.');
			var extension = domainParts[1];
			if(extension.length < 2){
				return false;
			}
		}

		return true;
	};

	validator.isPhoneNumber = function(input){

		//Phone number for Trinidad and Tobago is of the form 1 868 XXX XXXX

		if(!input){
			throw "Missing Parameter in isPhoneNumber function: 'input'.";
		}

		var phoneParts = input.split(" ");
		var countryCode = phoneParts[0];
		var areaCode = phoneParts[1];
		var firstPartPhone = phoneParts[2];
		var secondPartPhone = phoneParts[3];
		
		if(phoneParts.length !== 4){
			return false;
		}

		if(countryCode !== "1"){
			return false;
		}

		if(areaCode !== "868"){
			return false;
		}

		if(firstPartPhone.length !== 3 || parseInt(firstPartPhone).toString() !== firstPartPhone) {
			return false;
		}

		if(secondPartPhone.length !== 4 || parseInt(secondPartPhone).toString() !== secondPartPhone) {
			return false;
		}

		return true;
	};


	validator.withoutSymbols = function(input){
		if(!input){
			throw "Missing Parameter in withoutSymbols function: 'input'.";
		}

		//if the uppercase version of a character is equal to the lowercase version then it is a symbol not a letter.
		var i,char;
		var result = "";

		for(i = 0; i < input.length; i++){
			char = input.charAt(i);
			console.log(char);
			if(char === " "){	//check for space
				result += char;
			}else{
				if(parseInt(char).toString() === char){	//check for number
				result += char;
				}else{
					if((char.toLowerCase() !== char.toUpperCase()) ){ //check for letter
							result += char;
					}
				} 
			}
			
		}

		return result;
	};

	validator.isDate = function(input){

		if(!input){
			throw "Missing Parameter in isDate function: 'input'.";
		}
		
		if(Date.parse(input)){
			return true;
		}
		
		return false;
		
	};

	validator.isBeforeDate = function(input, reference){

		if(!input){
			throw "Missing Parameter in isBeforeDate function: 'input'.";
		}

		if(!reference){
			throw "Missing Parameter in isDate function: 'reference'.";
		}

		var date1 = Date.parse(input);
		var date2 = Date.parse(reference);
		if(!date1){
			throw "Invalid date format - "+ input;
		}else{
			if(!date2){
				throw "Invalid date format - "+ reference;
			}else{
				if(date1 < date2){
					return true;
				}
			}
		}

		return false;
	};

	validator.isAfterDate = function(input, reference){

		if(!input){
			throw "Missing Parameter in isBeforeDate function: 'input'.";
		}

		if(!reference){
			throw "Missing Parameter in isDate function: 'reference'.";
		}

		var date1 = Date.parse(input);
		var date2 = Date.parse(reference);
		if(!date1){
			throw "Invalid date format - "+ input;
		}else{
			if(!date2){
				throw "Invalid date format - "+ reference;
			}else{
				if(date1 > date2){
					return true;
				}
			}
		}

		return false;
	};

	validator.isBeforeToday = function(input){

		if(!input){
			throw "Missing Parameter in isBeforeDate function: 'input'.";
		}

		var date = Date.parse(input);
		if(!date){
			throw "Invalid date format - "+ input;
		}else{
			if(date < Date.now()){
				return true;
			}	
		}

		return false;
	};

	validator.isAfterToday = function(input){

		if(!input){
			throw "Missing Parameter in isAfterDate function: 'input'.";
		}

		var date = Date.parse(input);
		if(!date){
			throw "Invalid date format - "+ input;
		}else{
			if(date > Date.now()){
				return true;
			}	
		}
		
		return false;
	};

	validator.isEmpty = function(input){

		if(!input){
			throw "Missing Parameter in isEmpty function: 'input'.";
		}
	
		var i;
		
		if(input === null || input === undefined){
			return false;
		}
		
		if(input.length === 0){
			return true;
		}else{
				for(i = 0; i < input.length; i++){
					if(input.charAt(i) !== " "){
						return false;
					}
				}
		}
		
		return true;
		
	};
	
	validator.contains = function(){
		var elm = document.getElementById('results');
validator = {
  contains: function(inputString, wordsArray) {
    var words = inputString.toLowerCase().split(' ');
    for (var i = 0; i < wordsArray.length; i++) {
      if (words.indexOf(wordsArray[i]) != -1) {
        return true;
      }
    }
    return false;
  }
}

function log(result) {
  elm.innerHTML += result + '<br>';
}
log(validator.contains("Visiting new places is fun.", ["coconut"])); // returns false
log(validator.contains("Visiting new places is fun.", ["aces"])); // returns false
log(validator.contains("Visiting new places is fun.", ["places"])); // returns true
log(validator.contains('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"])); // returns true
	};

	validator.lacks = function(){
		//todo
	}

})(window);


/*var isTweetLength = function(tweet) {
  if (!tweet) throw "Missing Parameter in isTweetLength function: 'tweet'."
  if (tweet.length <= 140 && tweet.length > 0) return true;
  return false;
}*/

// you do not need to include the isTweetLength function in your file.
/*validator.isTweetLength = function(tweet) {
  
};*/



