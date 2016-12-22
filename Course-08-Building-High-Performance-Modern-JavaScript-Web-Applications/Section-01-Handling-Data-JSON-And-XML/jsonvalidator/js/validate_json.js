function validateJSON(jsonString){
	var validJSON = /((\[\{)|(,\{)|((\s)+,))((\s|)+"[a-zA-Z0-0]+":"[a-zA-Z0-9_:;\s]+"(\s|)+((,(\s|)+(?="))|((\}(\s|)+((?=,)|\])))))+/; 
  return validJSON.test(jsonString);
}

var testButton = document.getElementById('runTest');
var json = document.getElementById('jsonText').value.trim();

testButton.addEventListener('click', function(event){
	// console.log(json);
	if(json.length < 1){
		console.log("Enter some JSON in the textarea.");
	}else{
		console.log(json.trim());
	}
});


