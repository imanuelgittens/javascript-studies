//event delegation click

var tabs = document.getElementById('tabs');

tabs.addEventListener('click', handleTabClick);

function handleTabClick(event){
	if(event.target.tagName === 'A'){
		var tabTarget = event.target.getAttribute('href');
		localStorage.setItem('currentTab', tabTarget);
	}
}