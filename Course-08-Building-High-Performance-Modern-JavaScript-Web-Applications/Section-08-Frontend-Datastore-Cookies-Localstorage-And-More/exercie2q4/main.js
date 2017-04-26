var colorButton = document.getElementById('updateColor');
var removeButton = document.getElementById('removeColor');
var testArea = document.querySelector('.test');



function handleClick(event){
	sessionStorage.setItem('testBackgroundColor', 'blue');
	colorChecker();
}

function colorChecker(){
	var sessionColor = sessionStorage.getItem('testBackgroundColor');
	if(sessionColor){
		testArea.style.backgroundColor = sessionColor;
	}else{
		testArea.style.backgroundColor = '#333';
	}
}

function removeColor(){
	sessionStorage.removeItem('testBackgroundColor');
	colorChecker();
}

colorButton.addEventListener('click', handleClick);
removeButton.addEventListener('click', removeColor);
document.addEventListener('DOMContentLoaded', colorChecker);