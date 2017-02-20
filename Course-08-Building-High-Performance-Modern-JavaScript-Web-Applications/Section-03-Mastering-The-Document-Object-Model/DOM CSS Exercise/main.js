var stylesheets = document.styleSheets;

for (var x = 0; x < stylesheets.length; x++) {
    for(var y = 0; y < stylesheets[x].cssRules.length; y++){
        console.log(stylesheets[x].cssRules[y]);
    }



}