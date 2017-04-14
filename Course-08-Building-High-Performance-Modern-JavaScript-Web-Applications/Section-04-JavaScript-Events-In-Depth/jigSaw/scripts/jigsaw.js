
/*drag functions*/
    function allowDrop(event){
        event.preventDefault();
       /* event.dataTransfer.dropEffect = "move"*/
    }

    function drag(event){
        var id = event.target.id;
        event.dataTransfer.setData('text', id);
    }

    function drop(event){
        event.preventDefault();
        var data = event.dataTransfer.getData('text');
        console.log(data);
        event.target.appendChild(document.getElementById(data));
    }

/*end drag functions*/

/*action functions*/

var scrambleButton = document.getElementById('scramble');

function scramble(){

    var puzzlePiecesArea = document.getElementById('puzzle-pieces');

    puzzlePiecesArea.innerHTML = '';

    var imgSourceArray = ['<img id="puzzle-piece-5" src="assets/images/Group5.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-6" src="assets/images/Group6.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-7" src="assets/images/Group7.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-8" src="assets/images/Group8.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-9" src="assets/images/Group9.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-10" src="assets/images/Group10.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-11" src="assets/images/Group11.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-12" src="assets/images/Group12.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-13" src="assets/images/Group13.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-14" src="assets/images/Group14.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-15" src="assets/images/Group15.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-16" src="assets/images/Group16.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-17" src="assets/images/Group17.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-18" src="assets/images/Group18.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-19" src="assets/images/Group19.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-20" src="assets/images/Group20.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-21" src="assets/images/Group21.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-22" src="assets/images/Group22.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-23" src="assets/images/Group23.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-24" src="assets/images/Group24.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-25" src="assets/images/Group25.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-26" src="assets/images/Group26.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-27" src="assets/images/Group27.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-28" src="assets/images/Group28.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-29" src="assets/images/Group29.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-30" src="assets/images/Group30.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-31" src="assets/images/Group31.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-32" src="assets/images/Group32.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-33" src="assets/images/Group33.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-34" src="assets/images/Group34.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-35" src="assets/images/Group35.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-36" src="assets/images/Group36.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-37" src="assets/images/Group37.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-38" src="assets/images/Group38.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-39" src="assets/images/Group39.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-40" src="assets/images/Group40.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-41" src="assets/images/Group41.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-42" src="assets/images/Group42.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-43" src="assets/images/Group43.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-44" src="assets/images/Group44.png" ondragstart="drag(event)" draggable="true">',
        '<img id="puzzle-piece-45" src="assets/images/Group45.png" ondragstart="drag(event)" draggable="true">'
    ];

    var i;
    //randomize array
    imgSourceArray.sort(function() { return 0.5 - Math.random() });

    /*console.log(imgSourceArray);*/


    for(i = 0; i < imgSourceArray.length; i++){
        var puzzlePieceHTML = imgSourceArray[i];
        puzzlePiecesArea.innerHTML += puzzlePieceHTML;

    }
}

scrambleButton.addEventListener('click', scramble);


/*puzzle functions*/

function checkComplete(){
    var complete = true;
    var puzzleBoard = document.getElementById('puzzle-board');
    var j;
    for(j = 5; j <= 45; j++){
        var dropZone = puzzleBoard.querySelector('#dropzone-'+ j);
        var test = dropZone.querySelector('#puzzle-piece-'+j);
        if(!test){
            complete = false;
        }
    }
    alert(complete);
    return complete;
}

var completeButton = document.getElementById('complete');
completeButton.addEventListener('click', checkComplete);

function finishPuzzle(){
    var puzzleBoard = document.getElementById('puzzle-board');
    var piecesShelf = document.getElementById('puzzle-pieces');
    var items = document.querySelectorAll('[id^="puzzle-piece-"]');
    console.log(items);
    var k;
    for(k = 0; k < 41; k++){

        var idNum = items[k].id.substr(13);
        console.log(idNum);
        var node = piecesShelf.removeChild(items[k]);
        var correctPosition = puzzleBoard.querySelector('#dropzone-'+ idNum);
        correctPosition.appendChild(node);

    }
    /*console.log(pieces);*/
}

var finishButton = document.getElementById('finish-puzzle');
finishButton.addEventListener('click', finishPuzzle);


//show completed puzzle

function showComplete(){
    var puzzleBoard = document.getElementById('puzzle-board');
    /*var bg = puzzleBoard.style.background;*/
    this.classList.add('hidden');
    var hideCompleteButton = document.getElementById('hide-hint');
    hideCompleteButton.classList.remove('hidden');
    /*console.log(bg);*/
    puzzleBoard.style.background = 'url("./assets/images/_Puzzle_solved.png")';
    /*if(puzzleBoard.style.backgroundImage == '"../assets/images/_Puzzle_bg_unsolved.png"'){

    }*/
}

var showCompleteButton = document.getElementById('show-hint');
showCompleteButton.addEventListener('click', showComplete);

function hideComplete(){
    var puzzleBoard = document.getElementById('puzzle-board');
    /*var bg = puzzleBoard.style.background;*/
    this.classList.add('hidden');
    var showCompleteButton = document.getElementById('show-hint');
    showCompleteButton.classList.remove('hidden');
    /*console.log(bg);*/
    puzzleBoard.style.background = 'url("./assets/images/_Puzzle_bg_unsolved.png")';
    /*if(puzzleBoard.style.backgroundImage == '"../assets/images/_Puzzle_bg_unsolved.png"'){

     }*/
}

var hideCompleteButton = document.getElementById('hide-hint');
hideCompleteButton.addEventListener('click', hideComplete);
