//event delegation click

var tabs = document.getElementById('tabs');
var tabItems = tabs.querySelectorAll('li');
var tabsArray = [];
var i;

/*
for(i = 0; i < tabItems.length; i++){
	tabsArray.push(tabItems[i]);
}

console.log(tabsArray);
*/


function handleTabClick(event){
	if(event.target.tagName === 'A'){
		var tabTarget = event.target.getAttribute('href');
		localStorage.setItem('currentTab', tabTarget);
	}
}

function getActiveTab(){
	var tabFromLocalStorage = localStorage.getItem('currentTab');
	var j;
	if(tabFromLocalStorage){

		/*remove current active tab*/
		for(j = 0; j < tabItems.length; j++){
			if(tabItems[j].classList.contains('active')){
				tabItems[j].classList.remove('active');
			}
		}

		/* assign new active tab */
        var activeTab = tabs.querySelector('[href="'+tabFromLocalStorage+'"]');
        activeTab.parentNode.classList.add('active');
	}
}

tabs.addEventListener('click', handleTabClick);
document.addEventListener('DOMContentLoaded', getActiveTab);