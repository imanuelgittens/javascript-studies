(function(){
    /*Variables*/
    var jigsaw = document.getElementById('jigsaw');
    var scrambleButton = document.getElementById('scramble');
    var hintButton = document.getElementById('hint');
    var solvedImage = document.querySelector('.jigsaw__solved-image');
    var unsolvedImage = document.querySelector('.jigsaw__unsolved-image');

    /*Functions*/
    function scramble(){
        hideSolution();
    }

    function showSolution(){
        jigsaw.style.backgroundImage = 'url("assets/images/_Puzzle_solved.png")';
    }

    function hideSolution(){
        jigsaw.style.backgroundImage = 'url("assets/images/_Puzzle_bg_unsolved.png")';
    }

    /*Listeners*/
    scrambleButton.addEventListener('click', scramble);
    hintButton.addEventListener('mousedown', showSolution);
    hintButton.addEventListener('mouseup', hideSolution);
})();