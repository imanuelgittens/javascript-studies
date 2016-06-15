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

	utilities.pluralize = function d(n, word, pluralWord){

		if(pluralWord){
			if(n === 1){
				return word;
			}else{
				if(n == 2){
					return pluralWord;
				}
			}
		}else{
			if(n === 1){
				return word;
			}else{
				if(n != 1){
					return word+"s";
				}
			}
		}
		
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

	utilities.toCamel = function(input){
		if(!input){
			throw "Missing Parameter in pairs toCamel function: 'input'.";	
		}

		var i;
		var result = "";
		if(input.length > 1){ //string must have a length great than one
			for(i = 0; i < input.length; i++){ 
				if(input.charAt(i) === "-"){
					result += input.charAt(i+1).toUpperCase();
					i++;
				}else{
					result += input.charAt(i).toLowerCase();
				}
			}
		}else{
			throw "Please provide a non-empty string.";
		}
		
		return result;

		
	};

	utilities.has = function(obj, search){
		if(!obj){
			throw "Missing Parameter in has function: 'obj'.";	
		}

		if(!search){
			throw "Missing Parameter in has function: 'search'.";	
		}		
		
		var key;
		var result = false;
		
		for(key in obj){
			if(obj[key] === search){
				result = true;
			}
		}

		return result;

	};

	utilities.pick = function(obj, keysArr){
		if(!obj){
			throw "Missing Parameter in pick function: 'obj'.";	
		}

		if(!search){
			throw "Missing Parameter in pick function: 'keysArr'.";	
		}	
		
		var key, i;
		var result = {};
		
		for(i = 0; i < keysArr.length; i++){
			result[keysArr[i]] = obj[keysArr[i]];
		}

		return result;

	};

	window.utilities = utilities; //pass utilites object to global scope

})(window);