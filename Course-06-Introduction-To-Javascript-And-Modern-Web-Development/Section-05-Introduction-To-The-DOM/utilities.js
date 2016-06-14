(function(window){

	var utilities = {};

	utilities.by = function(){
		//todo
	};

	utilities.keys = function(input){

		if(!input){
			throw "Missing Parameter in keys function: 'input'.";	
		}	

		if(input instanceof Object){
			return Object.keys(input);	
		}else{
			throw "Please provide an object to this function.";
		}
		
	};

	utilities.values = function(input){

		if(!input){
			throw "Missing Parameter in values function: 'input'.";	
		}	

		if(input instanceof Object){
			return Object.values(input);	
		}else{
			throw "Please provide an object to this function.";
		}
		
	};

	utilities.pairs = function(input){

		if(!input){
			throw "Missing Parameter in pairs function: 'input'.";	
		}

		var result = [];
		var item;

		if(input instanceof Object){
			for(item in input){
				result.push(item);
				result.push(input[item]);
			}	
		}else{
			
		}

		return result;
		
	};

	utilities.shuffle = function(input){

		if(!input){
			throw "Missing Parameter in pairs function: 'input'.";	
		}

		var index, temp;

		if(input instanceof Array){
			var counter = input.length;
			counter--;
			while(counter > 0){
				index = Math.floor(Math.random() * counter);
				temp = input[counter];
				input[counter] = input[index];
				input[index] = temp;

			}
		}else{
			throw "Please provide an array to this function.";
		}

		return input;
	};

	utilities.pluralize = function(){
		//todo
	};

	utilities.toDash = function(input){
		if(!input){
			throw "Missing Parameter in pairs toDash function: 'input'.";	
		}

		var i;
		var result = "";
		if(input.length > 1){ //string must have a length great than one
			for(i = 0; i < input.length; i++){ 
				if(input.charAt(i) === input.charAt(i).toUpperCase()){
					result += "-" + input.charAt(i).toLowerCase();
				}else{
					result += input.charAt(i).toLowerCase();
				}
			}
		}else{
			throw "Please provide a non-empty string.";
		}
		
		return result;

		
	};

})(window);