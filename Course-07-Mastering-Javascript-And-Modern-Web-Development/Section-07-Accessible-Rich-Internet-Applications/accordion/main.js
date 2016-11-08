var accordion = document.querySelector('.accordion');
accordion.focus();

function activatePanel(heading, details){
  heading.setAttribute('aria-selected', true);
  details.setAttribute('aria-expanded', true);
  details.setAttribute('aria-hidden', false);
}

function deactivatePanel(heading, details){
  heading.setAttribute('aria-selected', false);
  details.setAttribute('aria-expanded', false);
  details.setAttribute('aria-hidden', true);
}

function togglePanel(event){
  var targetPanelId = event.target.getAttribute('aria-controls');
  var targetPanel = accordion.querySelector('#'+targetPanelId);

  if(event.target.tagName === 'H3'){
    var active = event.target.getAttribute('aria-selected');
    if(active === "false"){
      activatePanel(event.target, targetPanel);
    }else{
      deactivatePanel(event.target, targetPanel);
    }

  }
}

accordion.addEventListener('click', togglePanel);

function handleKeyPress(event){
  var key = event.keyCode;
  var targetParent = event.target.parentNode;
  var targetPanelId;
  var targetPanel;
  var targetTab;


  if(key === 32){
    alert('Hi');
  }

}

document.addEventListener('keyup', handleKeyPress);
