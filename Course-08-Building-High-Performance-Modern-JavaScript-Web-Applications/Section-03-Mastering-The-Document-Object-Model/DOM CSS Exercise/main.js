'use strict';

var stylesheets = document.styleSheets;
/* Deleting a CSS rule */
for (var x = 0; x < stylesheets.length; x++) {
    for(var y = 0; y < stylesheets[x].cssRules.length; y++){
        if(stylesheets[x].cssRules[y].selectorText === '.menu'){
            stylesheets[x].deleteRule(y);
        }
        console.log(stylesheets[x].cssRules[y]);
    }
}

/* Creating a new stylesheet object */

var style = document.createElement('style');
var styleSheet = style.styleSheet;
styleSheet.insertRule('.post {width: 100%}', styleSheet.cssRules.length);
styleSheet.insertRule('.post__title {font-size: 40px}', styleSheet.cssRules.length);